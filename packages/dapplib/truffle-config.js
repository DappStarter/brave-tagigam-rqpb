require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski struggle cost oval coconut gesture hat army gasp'; 
let testAccounts = [
"0xce469ef45466bd75d801eb32b7ed0c1524d394ac37f37eb740c37f4363f57c78",
"0xfecb206a47006b3cc4ebf34e8735362a2743192f4b42ecdd855422ac5c50589c",
"0x29d9a647b3a301461026b31da324d476f19c2775221627abd223676c6ffaafc2",
"0xa731d146013cff584bccb847d532d702cf0f7b243cac5a412e95c671b11f9ddf",
"0xafb8655996c5d6e911b6de96fc129f95bca81fb6ab7cf8782f8b6bf4412d1fd1",
"0x45e21345dadd9201ffa7e2859e8adc3968d24cdda7cb8c2aab5d84f7aed00112",
"0x8531720b7681f50137df93a80817d191f225d884608094c593324c45d94006ce",
"0xda3a37a43ed74ca7d25fba1bef0a222093ee66e6f60e597192ad14d044cdedee",
"0xeafa81221f9b3bb80a7fecb6878b57d78dcee46eb33eca9849d563ce821a5535",
"0xb10040865c7a47fb6a4100cf1e09343b83071c7902cf55670416ce2046d0ac99"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

