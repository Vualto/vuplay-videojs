# VUPLAY video.js

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Built with Grunt](http://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)

## Description

This repository will demonstrate how to use [VUDRM](https://vudrm.vualto.com/) with the [video.js](https://videojs.com).
If you have any questions please contact support@vualto.com

This repository is currently targeted at [version 7.10.2](https://github.com/videojs/video.js) of video.js.

## Instructions

### Install dependencies

1. Install [npm](https://www.npmjs.com/)
2. Install the [grunt-cli](https://www.npmjs.com/package/grunt-cli): `npm install -g grunt-cli`
3. Clone the repository: `git clone git@github.com:vualto/vuplay-video-js`
4. Navigate to the project's root folder: `cd vualto/vuplay-video-js`
5. Install the dependencies: `npm install`

### Build and run the dev environment

1. Open the repository in your favourite javascript editor.
2. In file `src/vuplay.js` replace `<your-stream-url>` with your stream URL. This must be a [MPEG-DASH](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP) stream.
3. In file `src/vuplay.js` replace `<your-vudrm-token>` with a VUDRM token from [https://admin.vudrm.tech](https://admin.vudrm.tech)
4. Run `npm run build` in the project's root. This will create a `dist` folder that contains all the files needed to run this demo. N.B. You will need to add the host `videojs.local.vuplay.co.uk` to your local machine's hosts file in order for this to work.
5. Load a supported browser and go to `https://videojs.local.vuplay.co.uk:14703`

NB: In order to allow DRM encrypted playback in chrome (<https://goo.gl/EEhZqT>), SSL has been enabled for the demo. You will get a warning about an invalid cert `NET::ERR_CERT_AUTHORITY_INVALID` but this can safely be ignored.

### Browser support

The browser must support [encrypted media extensions](https://www.w3.org/TR/2016/CR-encrypted-media-20160705/).
Currently this includes the latest versions of Chrome, Firefox, Internet Explorer 11 and Edge.
For a complete breakdown of supported media extensions please contact <support@vualto.com>

## Useful links

### VUDRM

- [Contact vualto](https://www.vualto.com/contact-us/)
- [VUDRM](https://vudrm.vualto.com/)
- [VUDRM token documentation](https://docs.vualto.com/projects/vudrm/en/latest/VUDRM-token.html)

### mpeg-DASH

- [MPEG-DASH](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [What is MPEG-DASH](https://www.streamingmedia.com/Articles/Editorial/What-Is-.../What-is-MPEG-DASH-79041.aspx)

### Encrpyted media extensions

- [Encrypted media extensions specification](https://www.w3.org/TR/2016/CR-encrypted-media-20160705/)
- [Encrypted media extensions wikipedia](https://en.wikipedia.org/wiki/Encrypted_Media_Extensions)
- [Encrypted media extensions on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Encrypted_Media_Extensions_API)
- [Intro to encrypted media extensions](https://www.html5rocks.com/en/tutorials/eme/basics/)

### video.js

- [video.js](https://github.com/videojs/video.js)
- [video.js releases](https://github.com/videojs/video.js/releases)

### Build tools

- [npm](https://www.npmjs.com/)
- [grunt](https://gruntjs.com/)
