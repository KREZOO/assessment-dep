/** @type {import('next').NextConfig} */

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
