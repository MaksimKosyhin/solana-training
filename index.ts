import { Keypair } from "@solana/web3.js";
let publicKey;
const word = 'max';
let i = 0;

for(;;i++) {
    const keypair = Keypair.generate();
    publicKey = keypair.publicKey.toBase58();
    if(publicKey.includes(word)) {
        break;
    }
}

console.log(`found public key: ${publicKey} with "${word}" in it in: ${i} iterations`);