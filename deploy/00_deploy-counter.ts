import { DeployFunction } from "hardhat-deploy/dist/types";

const deployCounter: DeployFunction = async function({
    getNamedAccounts,
    deployments
}) {
    const { deployer } = await getNamedAccounts();
    await deployments.deploy('Counter', {
        contract: 'Counter',
        from: deployer,
        args: []
    })
}

export default deployCounter;