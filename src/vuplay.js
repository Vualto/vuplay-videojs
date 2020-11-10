function setupWidevine(player, stream, licenseServerURL) {
    player.src({
        src: stream,
        type: "application/dash+xml",
        keySystems: {
            "com.widevine.alpha": licenseServerURL,
        },
    });
}

function setupPlayReady(player, stream, licenseServerURL) {
    player.src({
        src: stream,
        type: "application/dash+xml",
        keySystems: {
            "com.microsoft.playready": licenseServerURL,
        },
    });
}

function setupFairPlay(
    player,
    stream,
    certificateURI,
    licenseServerURL,
    token
) {
    player.src({
        src: stream,
        type: "application/x-mpegURL",
        keySystems: {
            "com.apple.fps.1_0": {
                certificateUri: certificateURI,
                licenseUri: licenseServerURL,
                getLicense: function(
                    emeOptions,
                    contentId,
                    keyMessage,
                    callback
                ) {},
                getContentId: function(emeOptions, initData) {
                    return null;
                },
            },
        },
    });
}

function setupDashNoDrm(player, stream) {
    player.src({
        src: stream,
        type: "application/dash+xml",
    });
}

function setupHlsNoDrm(player, stream) {
    player.src({
        src: stream,
        type: "application/x-mpegURL",
    });
}

(function() {
    const dashNoDrm =
        "https://d1chyo78gdexn4.cloudfront.net/vualto-demo/elephants-dream/elephants-dream_nodrm.ism/manifest.mpd";
    const dashDrm =
        "https://d1chyo78gdexn4.cloudfront.net/vualto-demo/elephants-dream/elephants-dream.ism/manifest.mpd";
    const hlsNoDrm =
        "https://d1chyo78gdexn4.cloudfront.net/vualto-demo/elephants-dream/elephants-dream_nodrm.ism/manifest.m3u8";
    const hlsDrm =
        "https://d1chyo78gdexn4.cloudfront.net/vualto-demo/elephants-dream/elephants-dream.ism/manifest.m3u8";

    const token = encodeURIComponent(
        "vualto-demo|2020-11-10T11:14:23Z|RAQrLiTYv+Z8U9LrxO0JDw==|1d1d532fd0c331ed6e3fced78afea95d4938bafb"
    );

    // playready
    const playReadyLicenseServerURL =
        "https://playready-license.vudrm.tech/rightsmanager.asmx?token=" +
        token;

    // widevine
    const widevineLicenseServerURL =
        "https://widevine-license.vudrm.tech/proxy?token=" + token;

    // fairplay
    // const fairplayCertificateUri = "<YOUR FAIRPLAY CERTIFICATE URL>";
    // const fairplayLicenseUri = "<YOUR FAIRPLAY LICENSE SERVER URL HERE>";

    // var player = videojs("my-video", {
    //     autoplay: true,
    // });

    // eme extension must be initialised before source is set
    // player.eme();

    // choose the DRM type you require
    // setupDashNoDrm(player, dashNoDrm);
    // setupWidevine(player, dashDrm, widevineLicenseServerURL);
    // setupPlayReady(player, dashDrm, playReadyLicenseServerURL);

    // setupHlsNoDrm( player, hlsDrm,);
    // setupFairPlay(§
    //     player,
    //     hlsDrm,
    //     fairplayCertificateUri,
    //     fairplayLicenseUri,
    //     token,
    // );
})();
