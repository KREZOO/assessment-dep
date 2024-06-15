/** @type {import('next').NextConfig} */

import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const nextConfig = {
   webpack: (config) => {
      config.resolve.alias['@'] = path.resolve(__dirname)
      return config
   },
   output: 'export',
   images: {
      unoptimized: true
   }
}

export default nextConfig
