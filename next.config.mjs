/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export'
}

const path = require('path')

module.exports = {
   webpack: (config) => {
      config.resolve.alias['@'] = path.resolve(__dirname, 'assessment-dep/ui')
      return config
   }
}

export default nextConfig
