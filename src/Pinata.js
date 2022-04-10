//imports needed for this function
// const axios = require('axios');
// const FormData = require('form-data');

import axios from 'axios';
import FormData from 'form-data';
const fs = require('fs');


export const pinFileToIPFS = async () => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    //we gather a local file for this example, but any valid readStream source will work here.
    let data = new FormData();
    data.append('file', fs.createReadStream('C:\\Users\\AakashWagle\\Downloads\\ReportForm.pdf'));

    //You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
    //metadata is optional
    // const metadata = JSON.stringify({
    //     walletAddress: 'testname',
    //     keyvalues: {
    //         exampleKey: 'exampleValue'
    //     }
    // });
    // data.append('pinataMetadata', metadata);

    //pinataOptions are optional
    const pinataOptions = JSON.stringify({
        cidVersion: 0,
        customPinPolicy: {
            regions: [
                {
                    id: 'FRA1',
                    desiredReplicationCount: 1
                },
                {
                    id: 'NYC1',
                    desiredReplicationCount: 2
                }
            ]
        }
    });
    data.append('pinataOptions', pinataOptions);

    return axios
        .post(url, data, {
            maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                pinata_api_key: "0108842830d4c88a4c3c",
                pinata_secret_api_key: "623f225c4506c75ba1d9c7db0ea16d96a250cc896973e14b96465caae79f2bfd"
            }
        })
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
};