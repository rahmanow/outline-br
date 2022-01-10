    import fetch from 'node-fetch';
    import https from 'https';

    const agent = new https.Agent({
        rejectUnauthorized: false
    });
    export async function getKeys(managementApiUrl, newDomain) {
        const url = managementApiUrl + '/access-keys/'.split('?')[0];
        const ip = managementApiUrl.split('/')[2].split(':')[0];
        const response = await fetch(url, {agent});
        const myJson = await response.json();
        const keys = myJson.accessKeys;
        let listKeys =[];
        for (let i=0; i<keys.length; i++) {
            let k = keys[i];
            let result = newDomain ? (k.name ? k.name : 'Noname') + ' -> ' + k['accessUrl'].split('/?')[0].replace(ip, newDomain) : (k.name ? k.name : 'Noname') + ' -> ' + k['accessUrl'].split('/?')[0];
            listKeys.push(result);
        }
        listKeys.forEach(i => console.log(i));
    }