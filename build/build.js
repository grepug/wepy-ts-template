const tsc = require('typescript')
const fs = require('fs')
const path = require('path')
const { readFile, writeFile, exec }  = require('./util')

fs.watch('src_ts', { recursive: true }, async (type, filename) => {
    console.log(filename)
    await compileSingle('src_ts/' + filename)
})

async function compileSingle (filename) {
    let { name } = path.parse(filename)
    let wpyDest = path.normalize(filename.replace(/src_ts([\\\/])/, 'src$1').replace(/([\\\/]\w+)\.ts/, '$1.wpy'))
    let ts = await readFile(filename)
    let wpy = await readFile(wpyDest)
    let replaced = wpy.replace(/<script\s*[\w\W]+>[\w\W\s\S]*<\/script>/, (match) => {
        return `<script lang="typescript">\n${ts}\n</script>`
    })
    await writeFile(wpyDest, replaced)
}