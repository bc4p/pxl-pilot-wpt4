import * as fs from 'fs'
import * as dotenv from 'dotenv'
import axios, { AxiosResponse } from 'axios'
import Web3 from 'web3'

dotenv.config()

async function main():Promise<void> {

    const web3 = new Web3(new Web3.providers.HttpProvider(process.env.BC4P_RPC!))

    const account = web3.eth.accounts.privateKeyToAccount(process.env.BC4P_PRIVKEY!)

    const buffer = fs.readFileSync(process.argv[2]) // command line argument with path to data

    const data = JSON.parse(buffer.toString())

    const data_signature = account.sign(JSON.stringify(data))
    
    
}

main().catch(console.error)