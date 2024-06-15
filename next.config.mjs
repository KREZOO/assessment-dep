/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
   webpack: (config) => {
      config.resolve.alias['@'] = path.resolve(__dirname, 'assessment-dep/ui')
      return config
   },
   output: 'export'
}

export default nextConfig
