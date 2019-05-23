var vudrmToken = "{your-vudrm-token}";
(function() {
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
        src: "{your-stream}",
        type: "{your-stream-type}",
        keySystems: {
            "com.apple.fps.1_0": {},
        },
    });
};

var setupPlayReady = (player) => {
    player.src({
        src: "{your-stream}",
        type: "{your-stream-type}",
        keySystems: {
            "com.apple.fps.1_0": {},
        },
    });
};

var setupFairPlay = (player) => {
    player.src({
        src: "{your-stream}",
        type: "{your-stream-type}",
        keySystems: {
            "com.apple.fps.1_0": {
                certificateUri: "{your-fairplay-certificate}",
                getLicense: (emeOptions, contentId, keyMessage, callback) => {},
                getContentId: (emeOptions, initData) => {
                    return null;
                },
            },
        },
    });
};
