import yaml from 'js-yaml'
import fs from 'fs'
// @ts-ignore
import merge from 'lodash/merge';
import type { MetaData } from '@/types'

export interface SiteConfig {
  name: string
  site?: string
  base?: string
  trailingSlash?: "never" | "always" | "ignore"
}

const DEFAULT_SITE_NAME = 'Website'

const config = yaml.load(fs.readFileSync('src/content/setting/index.yaml', 'utf8')) as {
  site?: SiteConfig,
  metadata?: MetaDataConfig
}

const getSite = () => {
  const _default = {
    name: import.meta.env.SITE_NAME ?? DEFAULT_SITE_NAME,
    site: import.meta.env.SITE_BASEURL ?? 'http://localhost:4321/',
    base: '/',
    trailingSlash: 'ignore',
  }

  return merge({}, _default, config?.site ?? {}) as SiteConfig
}

export interface MetaDataConfig extends Omit<MetaData, 'title'> {
  title?: {
    default: string
    template: string
  }
}

const getMetadata = () => {
  const siteConfig = getSite()

  const _default = {
    title: {
      default: siteConfig?.name || DEFAULT_SITE_NAME,
      template: '%s',
    },
    description: '',
    openGraph: {
      type: 'website'
    }
  }

  return merge({}, _default, config?.metadata ?? {}) as MetaDataConfig
}

// export const SITE_BASEPATH = import.meta.env.SITE_BASEURL
export const SITE = getSite()
export const METADATA = getMetadata()
