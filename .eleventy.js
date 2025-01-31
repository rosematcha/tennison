module.exports = function (eleventyConfig) {
    // Passthrough for CSS and assets
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addWatchTarget("./src/assets/");

    const markdownIt = require("markdown-it");
    const markdownItAttrs = require("markdown-it-attrs");

    const markdownItOptions = {
        html: true,
        breaks: true,
        linkify: true
    }

    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)    
    eleventyConfig.setLibrary('md', markdownLib)



    module.exports = function (eleventyConfig) {
        eleventyConfig.setLibrary("md", markdownIt({ html: true }).use(markdownItAttrs));
    };



    // Automatically collect all files in the "events" folder
    eleventyConfig.addCollection("events", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/events/**/*.{md,njk,html}");
    });

    return {
        dir: {
            input: "src", // Where the markdown and other content is stored
            output: "_site", // Where the generated site is stored
        },
    };
};
