/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const { withFrameworkConfig } = require('./src/framework/common/config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withFrameworkConfig(
  withPWA({
    reactStrictMode: true,
    pwa: {
      dest: 'public',
      disable: !isProd
    },
    framework: {
      name: 'shopify'
    },
    i18n: {
      locales: ['pt-BR', 'en-US'],
      defaultLocale: 'pt-BR'
    }
  })
)

console.log('next.config.js', JSON.stringify(module.exports))
