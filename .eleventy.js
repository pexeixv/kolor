module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('./sass/style.css')
    eleventyConfig.addPassthroughCopy('./img')
    eleventyConfig.addPassthroughCopy('./js')
    eleventyConfig.addPassthroughCopy('./font')
    eleventyConfig.addPassthroughCopy('./_redirects')
    return {
        dir: {
            input: '.',
            output: '_site'
        }
    }
}