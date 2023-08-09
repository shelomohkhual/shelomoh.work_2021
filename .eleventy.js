module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("js");
	eleventyConfig.addPassthroughCopy("img");

	// eleventyConfig.addCollection("sections", function (collection) {
	// 	return collection.getFilteredByGlob("sections/*.md").reverse();
	// });

	return {
		dir: {
			input: ".",
			output: "_site",
			includes: "_includes",
		},
	};
};
