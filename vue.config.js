module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://frontend-recruiting.100ladrillos.com'
            }
        }
    }
}