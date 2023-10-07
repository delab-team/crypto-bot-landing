/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'build',
  
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.module.rules.push({
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|m4a)(\?.*)?$/,
          use: {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/videos/',
              outputPath: 'static/videos/',
              name: '[name].[hash].[ext]'  
            }
          }
        })
      }
  
      return config
    }
  }
  
  module.exports = nextConfig