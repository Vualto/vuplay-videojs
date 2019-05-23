module.exports = function(grunt) {
    var videojsUrl = "https://vjs.zencdn.net/7.4.1/video.js";
    var yourStream =
        "https://d1chyo78gdexn4.cloudfront.net/vualto-demo/elephants-dream/elephants-dream_nodrm.ism/manifest.m3u8";
    var vuplayUrl = "vuplay.js";
    var vudrmToken =
        "vualto-demo|2019-03-04T11:23:25Z|RAQrLiTYv+Z8U9LrxO0JDw==|a4fa46ee82e9c09d59cbd2077207fb5a7ae69f43";
    var fairplayCert = "";

    var getStreamType = () => {
        var ext = yourStream.split(".").pop();
        return ext === "mpd" ? "application/dash+xml" : "application/x-mpegURL";
    };

    grunt.initConfig({
        dist: "dist",
        package: grunt.file.readJSON("package.json"),

        clean: ["<%= dist %>/*"],
        copy: {
            all: {
                expand: true,
                src: ["assets/vuplay_poster.png"],
                dest: "<%= dist %>/",
                flatten: true,
            },
        },
        "string-replace": {
            dist: {
                files: [
                    {
                        src: "index.html",
                        dest: "dist/index.html",
                    },
                    {
                        src: "src/vuplay.js",
                        dest: "dist/vuplay.js",
                    },
                ],
                options: {
                    replacements: [
                        {
                            pattern: "{vuplayjs}",
                            replacement: vuplayUrl,
                        },
                        {
                            pattern: "{your-stream}",
                            replacement: yourStream,
                        },
                        {
                            pattern: "{videojs-url}",
                            replacement: videojsUrl,
                        },
                        {
                            pattern: "{your-vudrm-token}",
                            replacement: vudrmToken,
                        },
                        {
                            pattern: "{your-stream-type}",
                            replacement: getStreamType(),
                        },
                        {
                            pattern: "{your-fairplay-certificate}",
                            replacement: fairplayCert,
                        },
                    ],
                },
            },
        },
        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ["**/*.js", "./index.html"],
                tasks: ["build"],
                options: {
                    spawn: false,
                },
            },
        },

        connect: {
            server: {
                options: {
                    protocol: "https",
                    hostname: "videojs.local.vuplay.co.uk",
                    port: 14703,
                    base: "dist",
                    keepalive: true,
                },
            },
        },
        concurrent: {
            connectandwatch: {
                tasks: ["connect", "watch"],
                options: {
                    logConcurrentOutput: true,
                },
            },
        },
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-string-replace");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-concurrent");

    grunt.registerTask("build", ["clean", "copy", "string-replace"]);
    grunt.registerTask("serve", ["build", "concurrent:connectandwatch"]);
};
