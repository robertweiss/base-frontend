module.exports = {
    parser: require('postcss-scss'),
    syntax: 'postcss-scss',
    sourceMap: true,
    plugins: () => [
        // Pugins are loaded top->down
        require('postcss-advanced-variables')({
            unresolved: 'warn'
        }),
        require('postcss-nested'),
        require('lost'),
        require('postcss-center'),
        require('postcss-functions')({
            functions: {
                em: (val) => (val / 16) * 1 + 'em',
                rem: (val) => (val / 16) * 1 + 'rem'
            }
        }),
        require('postcss-calc')({
            mediaQueries: true
        }),
        require('postcss-responsive-type'),
        require('autoprefixer')({
            grid: true
        }),
        require('postcss-sass-color-functions'),
        require('postcss-normalize')({
            forceImport: true
        }),
        require('postcss-strip-inline-comments'),
        require('postcss-discard-comments')({
            removeAll: true
        })
    ]
};
