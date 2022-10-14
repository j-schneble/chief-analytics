export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://github.com' : ''

export const defaultSEO = {
  title: 'Chief Analytics',
  description: 'Chief Analytics',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'Chief Analytics',
    images: [
      {
        url: `${baseUrl}/static/images/logo.png`,
        alt: 'Chief Analytics',
      },
    ],
  },
}

interface IExtendSEO {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function extendSEO(options: IExtendSEO) {
  const images = options.image
    ? [{ url: `${baseUrl}/static/${options.image}` }]
    : defaultSEO.openGraph.images

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  }
}