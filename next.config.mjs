/** @type {import('next').NextConfig} */

import path, { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const nextConfig = {
   webpack: (config) => {
      config.resolve.alias['@'] = path.resolve(__dirname, 'assessment-dep/ui')
      return config
   },
   output: 'export'
}

export default nextConfig
