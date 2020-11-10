var setupWidevine = (player, stream, licenseServerURL, token) => {
    player.src({
        src: stream,
        type: "application/dash+xml",
        keySystems: {
            "com.widevine.alpha": `${licenseServerURL}?token=${encodeURIComponent(
                token,
            )}`,
        },
    });
};

var setupPlayReady = (player, stream, licenseServerURL, token) => {
    player.src({
        src: stream,
        type: "application/dash+xml",
        "com.microsoft.playready": {
            url: `${licenseServerURL}?token=${encodeURIComponent(token)}`,
        },
    });
};

var setupFairPlay = (
    player,
    stream,
    certificateURI,
    licenseServerURL,
    token,
) => {
    player.src({
        src: stream,
        type: "application/x-mpegURL",
        keySystems: {
            "com.apple.fps.1_0": {
                certificateUri: certificateURI,
                licenseUri: licenseServerURL,
                getLicense: (emeOptions, contentId, keyMessage, callback) => {},
                getContentId: (emeOptions, initData) => {
                    return null;
                },
            },
        },
    });
};

var setupDashNoDrm = (player, stream) => {
    player.src({
        src: stream,
        type: "application/dash+xml",
    });
};

(function() {
    const stream =
        "https://d1chyo78gdexn4.cloudfront.net/vualto-demo/elephants-dream/elephants-dream.ism/manifest.mpd";
    const token =
        "vualto-demo|2020-11-10T11:14:23Z|RAQrLiTYv+Z8U9LrxO0JDw==|1d1d532fd0c331ed6e3fced78afea95d4938bafb";

    // playready
    const playReadyLicenseServerURL =
        "https://playready-license.vudrm.tech/rightsmanager.asmx";

    // widevine
    const widevineLicenseServerURL =
        "https://widevine-license.vudrm.tech/proxy";

    // fairplay
    // const fairplayCertificateUri = "<YOUR FAIRPLAY CERTIFICATE URL>";
    // const fairplayLicenseUri = "<YOUR FAIRPLAY LICENSE SERVER URL HERE>";

    var player = videojs("my-video", {
        autoplay: true,
    });

    // eme extension must be initialised before source is set
    player.eme();

    // choose the DRM type you require
    // setupDashNoDrm(player, stream);
    // setupWidevine(player, stream, widevineLicenseServerURL, token);
    setupPlayReady(player, stream, playReadyLicenseServerURL, token);
    // setupFairPlay(§
    //     player,
    //     stream,
    //     fairplayCertificateUri,
    //     fairplayLicenseUri,
    //     token,
    // );
})();
