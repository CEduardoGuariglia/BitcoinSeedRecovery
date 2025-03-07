# BitcoinSeedRecovery

🔍 Recuperação de Seed Phrase Parcial Utilizando Análise On-Chain
📌 Introdução
Este repositório contém um script para gerar endereços Bitcoin no formato 
Bech32m, utilizado em transações Taproot. Ele foi desenvolvido para 
auxiliar na recuperação de seed phrases incompletas, aplicando uma 
abordagem de tentativa e erro guiada por informações extraídas da 
blockchain.

A ideia surgiu durante um evento onde foi organizada uma caça ao tesouro 
com adesivos contendo palavras de seed phrases. No entanto, algumas 
palavras estavam faltando, impossibilitando a recuperação direta. 
Utilizando análise on-chain, filtragem de transações e geração massiva de 
endereços, conseguimos reconstruir as carteiras e recuperar os ativos 
armazenados nelas.

⚙️ Metodologia
Coleta de Informações Iniciais

Os adesivos continham palavras de uma seed phrase BIP39 (lista de 2048 
palavras).
Cada seed phrase era composta por 12 palavras, mas duas estavam faltando.
Cada seed phrase completa gerava uma carteira contendo um NFT da coleção 
Honey Badgers.
Cálculo da Complexidade

Com duas palavras ausentes, precisaríamos testar 2048² = 4.194.304 
combinações.
A geração de chaves privadas e derivação de endereços precisava seguir o 
formato Bech32m, exigido por Taproot.
Geração de Endereços Bitcoin

Foi utilizado Node.js para gerar endereços compatíveis com Bech32m.
Análise On-Chain para Localizar as Carteiras

Utilizando dados do Magic Eden, analisamos transações recentes para 
identificar novas carteiras que continham apenas um NFT da coleção Honey 
Badgers.
Identificamos uma carteira intermediária que recebia os NFTs de um 
endereço maior e os distribuía para outras.
Com esses endereços em mãos, comparamos com a lista gerada e descobrimos 
as seed phrases corretas.
🚀 Resultados
A estratégia permitiu recuperar com sucesso dois Honey Badgers e um Lil 
Sapos, validando a abordagem de força bruta guiada combinada com análise 
de movimentações on-chain.

Este repositório contém o código utilizado para gerar endereços e pode ser 
útil para experimentação e aprendizado sobre geração de chaves, endereços 
Bitcoin e recuperação de seed phrases parciais.

⚠️ Importante: Este projeto foi realizado em um contexto educacional e 
experimental sobre funcionamento da blockchain. Nunca compartilhe sua seed 
phrase e evite armazená-la de forma insegura.

🛠 Como Utilizar o Código
Instale Node.js se ainda não tiver instalado.
Clone este repositório e instale as dependências necessárias.
Execute o script para gerar endereços Bech32m com base em combinações de 
seed phrases incompletas.
Compare os endereços gerados com dados on-chain para identificar possíveis 
carteiras.
Para mais detalhes, consulte a documentação no código.

📩 Contato: Caso tenha dúvidas ou queira contribuir, sinta-se à vontade 
para entrar em contato!
