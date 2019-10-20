module.exports = {
    parser: require('postcss-scss'),
    syntax: 'postcss-scss',
    sourceMap: true,
    plugins: () => [
        // Pugins are loaded top->down
        require('lost'),
        require('postcss-center'),
        require('postcss-responsive-type'),
        require('autoprefixer')({
            grid: true
        }),
        require('postcss-normalize')({
            forceImport: true
        }),
        require('postcss-strip-inline-comments'),
        require('postcss-discard-comments')({
            removeAll: true
        })
    ]
};
