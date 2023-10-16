import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config;
const config: HardhatUserConfig = {
  solidity: "0.8.1",
  networks: {
    ganache: {
      url: "http://bank1rpc.bes.demo.aws.blockchaincloudpoc.com",
      accounts: [
        `0xca5397e05c147420686183cfeb8dc3513bc2f7848e841087a5c197bd91737a56`,
      ],
    },
  },
};

export default config;
