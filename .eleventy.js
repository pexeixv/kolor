module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('./src/sass/style.css')
    eleventyConfig.addPassthroughCopy('./src/img')
    eleventyConfig.addPassthroughCopy('./src/js')
    eleventyConfig.addPassthroughCopy('./src/font')
    eleventyConfig.addPassthroughCopy('./src/_redirects')
    return {
        dir: {
            input: 'src',
            output: 'static'
        }
    }
}