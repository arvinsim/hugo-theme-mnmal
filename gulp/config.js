// . points to the directory the gulpfile currently is in
var sourceFolder = './static-src';
var destFolder = './static';

module.exports = {
    sass: {
        src: sourceFolder + '/stylesheets/main.scss',
        dest: destFolder + '/css/',
        settings: {
            includePaths: [
                './node_modules/susy/sass'
            ]
        },
        watchlist: [
            sourceFolder + '/stylesheets/**/*.scss'
        ]
    }
};
