const fs = require('fs-extra')
const concat = require('concat')

build = async () => {
    const files = [
        './dis/proyecto-final/runtime.js',
        './dis/proyecto-final/main.js',
        './dis/proyecto-final/polyfills.js',
    ]
    await fs.ensureDir('loader')
    await concat('files/component.js')
    await fs.copyFile(
        '/dist/proyecto-final/styles.css',
        'loader/styles.css'
    )

} 