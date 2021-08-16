const streamURL = "<your-stream-url>"
const contentId = "<content-id>";

const token = encodeURIComponent(
    "<your-vudrm-token>"
);

// playready
const playReadyLicenseServerURL =
    "https://playready-license.vudrm.tech/rightsmanager.asmx?token=" + token;

// widevine
const widevineLicenseServerURL =
    "https://widevine-license.vudrm.tech/proxy?token=" + token;

// fairplay
const fairplayCertificateUri =
    "https://fairplay-license.vudrm.tech/certificate/vualto-demo";

const fairplayLicenseUri =
    "https://fairplay-license.vudrm.tech/license/" +
    contentId +
    "?token=" +
    token;

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
                licenseUri: fairplayLicenseUri,
            },
            "com.microsoft.playready": playReadyLicenseServerURL,
            "com.widevine.alpha": widevineLicenseServerURL,
        },
    });
})();