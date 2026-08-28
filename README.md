# outline-br

> ## ⚠️ Deprecated — use [ShadowboxKeys](https://github.com/rahmanow/ShadowboxKeys) instead
>
> This project has been merged into **[ShadowboxKeys](https://github.com/rahmanow/ShadowboxKeys)**, which does everything outline-br did and considerably more. outline-br is no longer developed; the npm package stays published at `2.0.2` so existing installs keep working, but it will receive no further updates or fixes.
>
> **Migrating** — `getKeys()` is available in ShadowboxKeys with the same signature, the same `Name -> ss://...` output and the same printing behaviour, so only the import changes:
>
> ```js
> // before
> const keys = require('outline-br');
> keys('https://outline-management-api-url', '87.65.43.21');
>
> // after
> const { getKeys } = require('shadowbox-keys');
> await getKeys('https://outline-management-api-url', '87.65.43.21');
> ```
>
> New code should prefer `listKeys()`, which returns structured data instead of printing.
>
> **What you gain by moving.** Everything this README listed under "Coming Soon" now exists, plus more:
>
> - Creating, renaming and deleting keys from the terminal, not just listing them
> - Per-key and server-wide data limits — the bandwidth tracking this project was written for
> - Usage reporting, showing how much each key has transferred against its limit
> - QR codes, so people can onboard by scanning instead of pasting `ss://` strings
> - JSON and CSV output
> - TLS certificate pinning, closing a man-in-the-middle gap this module left open
> - No `node-fetch` dependency, and a tested codebase running on Node 18, 20 and 22


[![npm (scoped)](https://img.shields.io/badge/npm-8.1.2-green.svg)](https://www.npmjs.com/package/@rahmanow/outline-keys-generator)

Simple JavaScript module for listing & changing generated keys locally on [Outline Manager](https://outline.org).

## Install

```
$ npm install outline-br
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
It can be used various reasons. The main idea was tracking the data usage of the Outline VPN users. If your server has limited free bandwidth, and you want to limit the users' bandwidth, you need to track it. In case (which happens a lot in my country) ISP blocks the IP, you will have to reinstall the server with new IP. And send the keys to the users again. Backup the Outline Manager from the server, restore it to new server and use "outline-br" to list all the new keys with the names.

# Coming Soon

Nothing further is planned here — this project is deprecated. Most of what was
listed under this heading has been built in
[ShadowboxKeys](https://github.com/rahmanow/ShadowboxKeys):

- ~~Auto generate mass keys~~ — `add` creates keys from the terminal
- ~~Using major functions of Outline Manager App from terminal~~ — `list`, `add`,
  `remove`, `rename`, `limit`, `usage` and `qr` all run from the shell
- Web App: Authorise a user to generate own key — still unbuilt
- Backup & Restore — still unbuilt, though pointing a domain at the restored
  server and re-listing the keys is what ShadowboxKeys' `OUTLINE_DOMAIN` is for