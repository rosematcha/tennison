module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css"); // add css folder
    eleventyConfig.addWatchTarget("./src/css/"); // watch css for changes
    eleventyConfig.addPassthroughCopy("./src/assets"); // add assets folder
    eleventyConfig.addWatchTarget("./src/assets/"); // watch assets for changes
    return {
      dir: {
        input: "src",
        output: "_site",
      },
    };
  };