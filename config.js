export const baseUrl = "https://gateway.pinata.cloud/ipfs/"
export const baseUri = "QmRE1aNGV8SEt5jcbKya6awzKuvSAdfRP73MWcgrF8wbML/"
// next.config.js
const withPlugins = require('next-compose-plugins');





const contractEnvironment = process.env.NEXT_PUBLIC_CONRACT_ENVIRONMENT

export const s3ContractLinkBase = `https://drinkingtrees.s3.us-east-2.amazonaws.com/${contractEnvironment}`

