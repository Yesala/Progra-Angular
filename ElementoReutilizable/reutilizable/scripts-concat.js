const fs = require('fs-extra')
const concat = require('concat')

build = async () => {
    const files = [
        './dist/reutilizable/main.js',
        './dist/reutilizable/polyfills.js',
        './dist/reutilizable/runtime.js',
    ]

    await fs.ensureDir('loader')
    await concat(files, 'loader/component.js')

    await fs.copyFile(
        './dist/reutilizable/styles.css',
        'loader/styles.css'
    )
    await fs.copyFile(
        './dist/reutilizable/index.html',
        'loader/index.html'
    )
}

build()
