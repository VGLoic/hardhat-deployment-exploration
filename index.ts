import { ContractStore } from "contract-store";
import * as counterGoerli from './deployments/goerli/Counter.json';

export const contractStore = new ContractStore({
    networks: {
        5: {
            abis: { COUNTER: counterGoerli.abi },
            deployments: {
                COUNTER: {
                    abiKey: 'COUNTER',
                    address: counterGoerli.address
                }
            }
        }
    }
})