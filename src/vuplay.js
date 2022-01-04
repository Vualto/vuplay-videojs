const streamURL = "<your-stream-url>";

const token = "<your-vudrm-token>";

// playready
const playReadyLicenseServerURL =
    "https://playready-license.vudrm.tech/rightsmanager.asmx?token=" + encodeURIComponent(token);

// widevine
const widevineLicenseServerURL =
    "https://widevine-license.vudrm.tech/proxy?token=" + encodeURIComponent(token);

// fairplay
const fairplayCertificateUri =
    "https://fairplay-license.vudrm.tech/certificate/<your-client-name>";

var fairplayLicenseUri;

var Utils = {
    uint16ArrayToString: function(array) {
        var uint16Array = new Uint16Array(array.buffer);
        return String.fromCharCode.apply(String, uint16Array);
    }
};

(function () {
    var player = videojs("my-video", {
        autoplay: true,
    });

    // eme extension must be initialised before source is set
    player.eme();

    player.src({
        src: streamURL,
        type: (streamURL.endsWith('.mpd') ? "application/dash+xml" : "application/x-mpegURL"),
        keySystems: {
            "com.apple.fps.1_0": {
                certificateUri: fairplayCertificateUri,
                getContentId: function (emeOptions, initData, eme) {
                    fairplayLicenseUri = "https://" + Utils.uint16ArrayToString(initData).split("skd://").pop();
                    var contentId = fairplayLicenseUri.split("/").pop();
                    return contentId;
                },
                getLicense: function (emeOptions, contentId, keyMessage, callback) {
                    videojs.xhr({
                        url: fairplayLicenseUri,
                        method: 'POST',
                        responseType: 'arraybuffer',
                        body: keyMessage,
                        headers: {
                            'Content-type': 'application/octet-stream',
                            'x-vudrm-token': token
                        }
                    }, (err, response, responseBody) => {
                        if (err) {
                            callback(err)
                            return
                        }
                        callback(null, responseBody)
                    })
                },
            },
            "com.microsoft.playready": playReadyLicenseServerURL,
            "com.widevine.alpha": widevineLicenseServerURL,
        },
    });
})();