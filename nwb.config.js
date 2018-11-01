module.exports = {
  type: 'react-app',
  babel: {
    plugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]]
  },
  webpack: {
    rules: {
      'less-css': {
        modules: true,
        localIdentName: '[folder]-[local]'
      }
    }
  }
}
