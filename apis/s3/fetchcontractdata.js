import { s3ContractLinkBase } from "../../config";

export default async function fetchContractData( endPoint) {

    const url = `${s3ContractLinkBase}/${endPoint}`

    try {
      const fetchResponse = await fetch(url);
      const res = await fetchResponse.json()
      return res;
    } catch (err) {
      console.error('Error - ', err);
    }
  }