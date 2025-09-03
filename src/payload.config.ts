// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users/config'
import { Blogs } from './collections/Blogs/config'
import { Contact } from './collections/Contact/config'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { ThirdPartyAccess } from './collections/ThirdPartyAccess'
import { SiteSettings } from './collections/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Pages,
    Users,
    Media,
    ThirdPartyAccess,
    Blogs,
    Contact
  ],
  globals: [
    // @ts-ignore
    SiteSettings,
  ],
  editor: lexicalEditor(),
  serverURL: process.env.SERVER_URL || 'http://localhost:5000',
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  upload: {
    limits: {
      fileSize: 50 * 1024 * 1024, // 50 MB
    },
  },
})
