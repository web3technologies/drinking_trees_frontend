import { useState, useEffect} from 'react'
import {s3AccessKeyID, s3SecretAccessKey, baseS3URL } from '../config/config'

const AWS = require("aws-sdk")


export default function useExampleImages(){

    const [ image, setImage ] = useState(null)

    function randomNumber(min, max) { 
        return Math.random() * (max - min) + min;
    } 

    useEffect(()=>{

        let timer;
        const images = []

        async function getData(){
            

            let s3 = new AWS.S3({
                region: "us-east-1",
                accessKeyId: s3AccessKeyID,
                secretAccessKey: s3SecretAccessKey 
            })
            
            const bucketParams = {
                Bucket: 'drinkingtrees',
                Prefix: "example_images"
            };


            try {
                const response = await s3.listObjectsV2(bucketParams).promise();
                response.Contents.forEach(obj => images.push(obj));

            } catch(e){
                console.log('failing')
                console.log(e)
            }


            timer = setInterval(()=>{
                
                try{
                    const image = images[Math.floor(randomNumber(1,6))].Key
                    setImage( `${baseS3URL}${image}`)
                } catch(e){
                    console.log(e)
                }
                

            }, 1500)


            
        }

        getData()

        return () => {
            clearInterval(timer)
            setImage(null)
        }

    },[])

    return { image }

}