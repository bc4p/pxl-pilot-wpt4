import * as fs from 'fs'
import * as dotenv from 'dotenv'
import Web3 from 'web3'

dotenv.config()

async function main():Promise<void> {

    const web3 = new Web3(new Web3.providers.HttpProvider(process.env.BC4P_RPC!))

    const account = web3.eth.accounts.privateKeyToAccount(process.env.BC4P_PRIVKEY!)

    const contract_address = process.env.BC4P_CONTRACT

    const contract_json = JSON.parse(fs.readFileSync('../build/contracts/MessageRegistry.json').toString())

    const contract = new web3.eth.Contract(contract_json.abi, contract_address)

    const data = JSON.parse(fs.readFileSync(process.argv[2]).toString())

    const data_signature = account.sign(JSON.stringify(data))
    
    const transfer = contract.methods.storeHash(data_signature.messageHash, data_signature.signature).encodeABI()

    const transaction = {
        from: account.address,
        to: contract_address,
        gas: 750000,
        data: transfer
    }

    account.signTransaction(transaction).then((transaction_signed) => {
        web3.eth.sendSignedTransaction(transaction_signed.rawTransaction!)
    })

}

main().catch(console.error)