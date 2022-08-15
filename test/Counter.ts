import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Counter", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshopt in every test.
  async function deployCounter() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    return { counter };
  }

  it("should allow anyone to increment the count", async () => {
    const { counter } = await loadFixture(deployCounter);

    expect(await counter.count()).to.equal(0);

    await expect(counter.increment())
          .to.emit(counter, "CountIncremented")
          .withArgs(2); // We accept any value as `when` arg

    expect(await counter.count()).to.equal(2);
  })
});
