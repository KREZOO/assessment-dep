/** @type {import('next').NextConfig} */

import path from 'path'

const nextConfig = {
   basePath: '/assessment-dep',
   assetPrefix: '/assessment-dep/',
   webpack: (config) => {
      config.resolve.alias['@'] = path.resolve(__dirname)
      return config
   },
   output: 'export'
}

export default nextConfig
