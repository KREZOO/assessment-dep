/** @type {import('next').NextConfig} */

import path from 'path'

const nextConfig = {
   webpack: (config) => {
      config.resolve.alias['@'] = path.resolve(__dirname, 'assessment-dep/ui')
      return config
   },
   output: 'export'
}

export default nextConfig
