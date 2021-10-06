module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('./static/sass/style.css')
    eleventyConfig.addPassthroughCopy('./static/img')
    eleventyConfig.addPassthroughCopy('./static/js')
    eleventyConfig.addPassthroughCopy('./static/font')
    eleventyConfig.addPassthroughCopy('./static/_redirects')
    return {
        dir: {
            input: 'src',
            output: 'static'
        }
    }
}