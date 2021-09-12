# Basic Sample Hardhat Project

>Had to change the localnet chain Id from the metamask wallet to 31337 to match the hardhat's chainId.

1. `npm i` Get dependencies
2. `npx hardhat compile` Compile the contract into artifacts (abi)
3. `npx hardhat node` Get the node running
4. `npx hardhat run scripts/deploy.js --network localhost` Deploy to the localnode
5. `npm run dev` Get frontend up.

Deployed in rinkeby using Infura too. 
`npx hardhat run scripts/deploy.js --network rinkeby` to deploy it in rinkeby network.


Built using [Hardhat](https://hardhat.org/) and [Vite](https://vitejs.dev/)