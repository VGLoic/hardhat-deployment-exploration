import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-deploy';
import * as dotenv from 'dotenv';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  namedAccounts: {
    deployer: {
      default: 0
    }
  },
  networks: {
    goerli: {
      url: process.env.GOERLI_NODE_URL,
      accounts: {
        mnemonic: process.env.GOERLI_MNEMONIC
      }
    },
    localhost: {
      live: false,
      saveDeployments: true,
      accounts: {
        mnemonic: process.env.LOCALHOST_MNEMONIC
      }
    }
  }
};

export default config;
