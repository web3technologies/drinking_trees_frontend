import drinkingTreeData from './artifacts/contracts/address/DrinkingTrees.json'
import nftMarketData from './artifacts/contracts/address/NFTMarket.json'
import drinkingTreesBankData from './artifacts/contracts/address/DrinkingTreesBank.json'


export const nftmarketaddress = nftMarketData.address
export const drinkingTreesTwo = drinkingTreeData.address
export const bankAddress = drinkingTreesBankData.address
export const baseUrl = "https://gateway.pinata.cloud/ipfs/"
export const baseUri = "QmRE1aNGV8SEt5jcbKya6awzKuvSAdfRP73MWcgrF8wbML/"


const contractEnvironment = process.env.NEXT_PUBLIC_CONRACT_ENVIRONMENT

export const s3ContractLinkBase = `https://drinkingtrees.s3.us-east-2.amazonaws.com/${contractEnvironment}`

