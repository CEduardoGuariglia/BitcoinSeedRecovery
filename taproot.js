const readline = require('readline');
const ecc = require('tiny-secp256k1');
const { BIP32Factory } = require('bip32');
const bip32 = BIP32Factory(ecc);
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

bitcoin.initEccLib(ecc);

// Caminho de derivação Taproot (BIP-86)
const path = `m/86'/0'/0'/0/0`;

// Função para converter chave pública para formato XOnly (32 bytes)
const toXOnly = (pubKey) => (pubKey.length === 32 ? pubKey : pubKey.slice(1, 33));

// Interface para entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Perguntar ao usuário a seed phrase
rl.question("Digite sua seed phrase de 12 palavras: ", async (mnemonic) => {
    // Remover espaços extras
    mnemonic = mnemonic.trim().toLowerCase();

    // Validar a seed phrase
    if (!bip39.validateMnemonic(mnemonic)) {
        console.log("❌ Seed phrase inválida!");
        rl.close();
        return;
    }

    // Gerar a seed a partir da seed phrase
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const rootKey = bip32.fromSeed(seed);

    // Derivar a chave Taproot a partir do caminho BIP-86
    const childNode = rootKey.derivePath(path);

    // Gerar chave pública no formato correto (XOnly)
    const internalPubkey = toXOnly(childNode.publicKey);

    // Criar endereço Taproot (bc1p...)
    const { address } = bitcoin.payments.p2tr({
        internalPubkey: Buffer.from(internalPubkey)
    });

    console.log(`
    ✅ Carteira Taproot gerada com sucesso!
    - 📬 Endereço Taproot (bc1p): ${address}
    - 🔑 Chave Privada (WIF): ${childNode.toWIF()}
    - 📝 Mnemonic: ${mnemonic}
    `);

    rl.close();
});