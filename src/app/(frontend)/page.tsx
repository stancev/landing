import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import { Button } from '@/components/ui/button'
import HeroSection from '@/components/hero-section'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="home dark">
      <div className="content">
        <HeroSection />
        {/* <picture>
          <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
          <Image
            alt="Payload Logo"
            height={65}
            src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
            width={65}
          />
        </picture>
        {!user && (
          <h1 className="text-3xl font-bold underline text-blue-800">
            Welcome to your new project.
          </h1>
        )}
        {user && <h1>Welcome back, {user.email}</h1>}
        <div className="links space-x-1">
          <a
            className="admin"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button>Go to admin panel</Button>
          </a>
          <a
            className="docs"
            href="https://payloadcms.com/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant="secondary">Documentation</Button>
          </a>
        </div> */}
      </div>
      {/* <div className="footer">
        <p>Update this page by editing</p>
        <a className="codeLink" href={fileURL}>
          <code>app/(frontend)/page.tsx</code>
        </a>
      </div> */}
    </div>
  )
}
