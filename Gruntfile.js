module.exports = function(grunt) {
    var videojsUrl =
        "https://cdnjs.cloudflare.com/ajax/libs/video.js/7.10.2/video.min.js";
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
                            pattern: "{videojs-url}",
                            replacement: videojsUrl,
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
