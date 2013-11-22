#grunt-dependo

Visualize your CommonJS or AMD module dependencies in a force directed graph using D3.js.

###Install

````sh
npm install grunt-dependo
````

###Task Example

````js
        dependo: {
            main: {
                fileName: 'main.html',
                targetPath: './example-multipage/www'
            },
            secondarylib: {
                fileName : 'secondarylib.html',
                targetPath: './js/'
            },
            options: {
                outputPath: './',
                fileName : 'dependencies.html',
                format: 'amd'
            }
        }
````
