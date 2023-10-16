// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import { ethers } from "hardhat";

async function main() {
  // const Greet = await ethers.getContractFactory("Greet");
  // const greet = await Greet.deploy();
  // await greet.deployed();
  // console.log(` deployed to ${greet.address}`);
  const greeting = "Hello Greetings!";
  const greet = await ethers.deployContract("Greet", [greeting]);
  await greet.waitForDeployment();
  console.log(` deployed to ${greet.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
