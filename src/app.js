const app = new Vue({
    el: "#app",
    data() {
        return {
            drmTypes: [
                {
                    name: "widevine",
                    display: "Widevine",
                },
                {
                    name: "playready",
                    display: "PlayReady",
                },
                {
                    name: "fairplay",
                    display: "FairPlay",
                },
            ],
            streamTypes: [
                {
                    name: "dash",
                    display: "MPEG-DASH",
                },
                {
                    name: "hls",
                    display: "HLS",
                },
            ],
            streamType: "",
            drmType: "",
        };
    },
});
