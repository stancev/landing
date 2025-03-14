import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
