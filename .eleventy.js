module.exports = function(eleventyConfig) {
  // Passthrough copy for the admin folder
  eleventyConfig.addPassthroughCopy("admin");

  // Passthrough copy for static assets (we will use this later for images/fonts)
  eleventyConfig.addPassthroughCopy("static");

  return {
    dir: {
      includes: "_includes"
    }
  };
};
