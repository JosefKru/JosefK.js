import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
  projectId: 'rl8tbs2w',
  dataset: 'production',
}

export const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: '2021-03-25',
  token: process.env.SANITY_PUBLIC_TOKEN,
  useCdn: true,
  ignoreBrowserTokenWarning: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
