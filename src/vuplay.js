var vudrmToken = "{your-vudrm-token}";
(function () {
    var player = videojs("my-video", {
        autoplay: true,
    });

    // eme extension must be initialised before source is set
    player.eme();

    // choose the DRM type you require
    // setupWidevine(player);
    // setupPlayReady(player);
    setupFairPlay(player);
})();

var setupWidevine = (player) => {
    player.src({
        src: '<your url here>',
        type: 'application/dash+xml',
        keySystems: {
            'com.widevine.alpha': '<YOUR URL HERE>'
        }
    });
};

var setupPlayReady = (player) => {
    player.src({
        'com.microsoft.playready': {
            url: '<YOUR_KEY_URL>',
            licenseHeaders: {
                'Some-Header': 'value'
            }
        }
    });
};

var setupFairPlay = (player) => {
    player.src({
        src: "{your-stream}",
        type: "{your-stream-type}",
        keySystems: {
            "com.apple.fps.1_0": {
                certificateUri: "{your-fairplay-certificate}",
                getLicense: (emeOptions, contentId, keyMessage, callback) => { },
                getContentId: (emeOptions, initData) => {
                    return null;
                },
            },
        },
    });
};
