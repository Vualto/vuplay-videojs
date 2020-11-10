const dashNoDrm =
    "https://d1chyo78gdexn4.cloudfront.net/vualto-demo/elephants-dream/elephants-dream_nodrm.ism/manifest.mpd";
const hlsNoDrm =
    "https://d1chyo78gdexn4.cloudfront.net/vualto-demo/elephants-dream/elephants-dream_nodrm.ism/manifest.m3u8";

const dashDrm =
    "https://d1chyo78gdexn4.cloudfront.net/vualto-demo/elephants-dream/elephants-dream.ism/manifest.mpd";
const hlsDrm =
    "https://d1chyo78gdexn4.cloudfront.net/vualto-demo/elephants-dream/elephants-dream.ism/manifest.m3u8";

const token = encodeURIComponent(
    "vualto-demo|2020-11-10T11:14:23Z|RAQrLiTYv+Z8U9LrxO0JDw==|1d1d532fd0c331ed6e3fced78afea95d4938bafb"
);

// playready
const playReadyLicenseServerURL =
    "https://playready-license.vudrm.tech/rightsmanager.asmx?token=" + token;

// widevine
const widevineLicenseServerURL =
    "https://widevine-license.vudrm.tech/proxy?token=" + token;

// fairplay
const contentId = "elephants-dream";
const fairplayCertificateUri =
    "https://fairplay-license.vudrm.tech/certificate/vualto-demo";

const fairplayLicenseUri =
    "https://fairplay-license.staging.vudrm.tech/license/" +
    contentId +
    "?token=" +
    token;

(function () {
    var player = videojs("my-video", {
        autoplay: true,
    });

    // eme extension must be initialised before source is set
    player.eme();

    // setupDashNoDrm(player);
    // setupHlsNoDrm(player);

    // choose the DRM type you require
    // setupWidevine(player, widevineLicenseServerURL);
    // setupPlayReady(player, playReadyLicenseServerURL);

    setupFairPlay(player, fairplayCertificateUri, fairplayLicenseUri);
})();

function setupDashNoDrm(player) {
    player.src({
        src: dashNoDrm,
        type: "application/dash+xml",
    });
}

function setupHlsNoDrm(player) {
    player.src({
        src: hlsNoDrm,
        type: "application/x-mpegURL",
    });
}

function setupWidevine(player, licenseServerURL) {
    player.src({
        src: dashDrm,
        type: "application/dash+xml",
        keySystems: {
            "com.widevine.alpha": licenseServerURL,
        },
    });
}

function setupPlayReady(player, licenseServerURL) {
    player.src({
        src: dashDrm,
        type: "application/dash+xml",
        keySystems: {
            "com.microsoft.playready": licenseServerURL,
        },
    });
}

function setupFairPlay(player, certificateURI, licenseServerURL) {
    player.src({
        src: hlsDrm,
        type: "application/x-mpegURL",
        keySystems: {
            "com.apple.fps.1_0": {
                certificateUri: certificateURI,
                licenseUri: licenseServerURL,
            },
        },
    });
}
