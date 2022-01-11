# @rahmanow/outline-br

[![npm (scoped)](https://img.shields.io/badge/npm-8.1.2-green.svg)](https://www.npmjs.com/package/@rahmanow/outline-keys-generator)

Simple JavaScript for listing & changing generated keys locally on [Outline Manager](https://outline.org).

## Install

```
$ npm install @rahmanow/outline-br
```

## Usage
First you need to back up your old Outline (shadowbox) server. 

For Ubuntu:
Backup access.txt and persisted-state folder in /opt/outline folder.

Restore it to the same location in new server after installing Outline.

```js
const keys = require("@rahmanow/outline-br");

// list without changing ip
keys('https://outline-management-api-url');


//Example Output:
// Anny -> ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpoanFiUhjTJCM25FcWo@12.34.56.78:3422
// Batyr -> ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpHUGpGMjj1R3RFUxYUg@12.34.56.78:3425
// Mike -> ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpwd0RLjdFBNbWtweXQ@12.34.56.78:2323
// Rodger -> ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpwTW1VVo0trNmd5N2w@12.34.56.78:443
// Azat -> ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpHSVhaVW9Jfb1YzQUg@12.34.56.78:3422
// Claire -> ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpuVEc4MkdMyalJPbmc@12.34.56.78:3422
// ...
// ...


// list with new ip
keys('https://outline-management-api-url', '87.65.43.21');

// Example Output with new IP
// Anny -> ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpoanFiUhjTJCM25FcWo@87.65.43.21:3422
// Batyr -> ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpHUGpGMjj1R3RFUxYUg@87.65.43.21:3425
// Mike -> ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpwd0RLjdFBNbWtweXQ@87.65.43.21:2323
// Rodger -> ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpwTW1VVo0trNmd5N2w@87.65.43.21:443
// Azat -> ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpHSVhaVW9Jfb1YzQUg@87.65.43.21:3422
// Claire -> ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpuVEc4MkdMyalJPbmc@87.65.43.21:3422
// ...
// ...
```

# When it is used?
It can be used various reasons. The main idea was tracking the data usage of the Outline VPN users. If your server has limited free bandwidth and you want to limit the users' bandwidth, you need to track it. In case (which happens a lot in my country) ISP blocks the IP, you will have to reinstall the server with new IP. And send the keys to the users again. Backup the Outline Manager from the server, restore it to new server and use "outline-br" to list all the new keys with the names.

# Coming Soon
- Auto generate mass keys.
- Using major functions of Outline Manager App from terminal.
- Web App: Authorise a user to generate own key.
- Backup & Restore 
