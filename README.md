# BitcoinSeedRecovery

🔍 Partial Seed Phrase Recovery Using On-Chain Analysis
📌 Introduction
This repository contains a script to generate Bitcoin addresses in the 
Bech32m format, used in Taproot transactions. The code was developed to 
assist in recovering partial seed phrases, applying a brute-force approach 
guided by insights from on-chain transaction analysis.

This project originated from an event where a treasure hunt was organized 
using stickers containing seed phrase words. However, some words were 
missing, making direct recovery impossible. By combining on-chain 
analysis, transaction filtering, and mass address generation, we 
successfully reconstructed the wallets and retrieved the assets stored in 
them.

⚙️ Methodology
Initial Information Collection

The stickers contained words from a BIP39 seed phrase (2048-word list).
Each seed phrase consisted of 12 words, but two were missing.
Each complete seed phrase generated a wallet containing an NFT from the 
Honey Badgers collection.
Complexity Calculation

With two missing words, we needed to test 2048² = 4,194,304 possible 
combinations.
Key generation and address derivation had to follow the Bech32m format, 
required by Taproot.
Bitcoin Address Generation

Node.js was used to generate addresses in the correct Bech32m format.
On-Chain Analysis to Locate the Wallets

Using Magic Eden transaction data, we analyzed recent transfers to 
identify new wallets holding only one Honey Badger NFT.
We identified an intermediary wallet that received NFTs from a larger 
account and distributed them to others.
With these addresses in hand, we compared them to our generated list and 
successfully identified the correct seed phrases.
🚀 Results
This approach successfully recovered two Honey Badgers and one Lil Sapos, 
validating the method of guided brute force combined with on-chain 
transaction analysis.

This repository contains the script used to generate addresses and may be 
useful for experimentation and learning about key generation, Bitcoin 
addresses, and partial seed phrase recovery.

⚠️ Important: This project was conducted for educational purposes and to 
explore blockchain mechanics. Never share your seed phrase and avoid 
unsafe key storage practices.

🛠 How to Use the Code
Install Node.js if you haven't already.
Clone this repository and install the required dependencies.
Run the script to generate Bech32m addresses based on partial seed phrase 
combinations.
Compare the generated addresses with on-chain data to identify possible 
wallets.
For more details, check the code documentation.

📩 Contact: If you have questions or would like to contribute, feel free 
to reach out!
