require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food chaos raise sad exchange coral light army gift'; 
let testAccounts = [
"0x88e9d8642ff1970dcd7d8ba763d4faff5be200bc05f27edd2c1847b43857debc",
"0x3e69997eb9e84af25ebddf53339609ccc95c2ff6ca6dde8650b21bcb6b0cd289",
"0x2bd9842eedbcc5b51410ea1a132120c1b0e7721787eac8b21039a832b9c36703",
"0x7a4ec23e288219e9c6804de5c5f3a2b846a05b8ba4f426a6c4077153c69dbd41",
"0x6e188c81766a42219c48dcb17b821e5694875699439f855648102c62b64cb8e8",
"0x04dd100c009e21df2e06de9eb27e86fd0577751ff23a3f1363430f7d5788bbd2",
"0xbc6f2365bd9b6b973f256ff92d21dfce2ae8a95079a0706f1978cd28280f0ce5",
"0xf848ba06c57b5df81a21ff895542a29b0abc22b695e1adeca779a21cf9485804",
"0x241669e8000cdd87053896335e8fd3bf26eb114f42713f7f2624a99840a4ff96",
"0xbe0afb4410dede5e86d1ecd1aabd5bd0b70db3a6794c7f09472d56884cc4a668"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

