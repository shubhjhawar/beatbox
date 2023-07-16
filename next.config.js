/** @type {import('next').NextConfig} */
const nextConfig = {
    // Allow Next.js to use experimental features
    experimental: {
      externalDir: true, // Enable external directory support
    },
    
    // Configure Webpack resolution for packages
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Ignore 'fs' and 'child_process' packages that are not meant for browser-side execution
        config.resolve.fallback = {
          fs: false,
          child_process: false,
          querystring: require.resolve("querystring-es3"),
        }
      }
      
      return config
    },
    
    // Exclude unnecessary dependencies from being bundled
    excludeDefaultMomentLocales: true,
    
    // Enable serverless deployment
    target: 'serverless',
    
    // Add custom environment variables
    env: {
      // Add your environment variables here
    },
  }
  
  module.exports = nextConfig
  