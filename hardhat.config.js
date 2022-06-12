require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-gas-reporter")
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const RINKEBY_URL = "https://eth-rinkeby.alchemyapi.io/v2/VaucHtwYFnKc8--VAZjV7QiKluMHTVTn"
const PRIVATE_KEY = "1ccc55aed2750f2fe062953631df2cfcfdf866d7cf6a0725053a48b5c0d56558"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_KEY = process.env.COINMARKETCAPKEY
console.log(RINKEBY_URL)
console.log(PRIVATE_KEY)
module.exports = {
  defaultNetwork :"hardhat",
  networks : {
    rinkeby : {
      url :RINKEBY_URL,
      accounts :[PRIVATE_KEY],
      chainId :4
    }
  },
  solidity: "0.8.4", 
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasreporter:{
    enabled: true,
    outputFile: "gas-reporter.text",
    noColor: false,
    apiKey:COINMARKETCAP_KEY

  }
}
