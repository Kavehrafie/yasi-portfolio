import type { AstroComponentFactory } from 'astro/runtime/server/index.js'
import type { HTMLAttributes } from 'astro/types'

export interface Work {
  slug: string
}

export interface Image {
  src: string
  alt?: string
  width: number | string
  height: number | string
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;
  canonical?: string;
  description?: string;
  instagram?: object;
  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface NavigationLink {
  text: string,
  slug?: string,
  links: NavigationLink
}