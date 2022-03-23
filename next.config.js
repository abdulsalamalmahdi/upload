module.exports = {
  
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false,
          config.resolve.fallback.net= false,
          config.resolve.fallback.tls= false,
          config.resolve.fallback.cardinal= false
          

        }
    
        return config
      },
    reactStrictMode: true,
    api: {
      bodyParser: {
        sizeLimit: '50mb',
      },
    },
    env: {
        NEXT_PUBLIC_MYSQL_HOST:  process.env.MYSQL_HOST ,
        NEXT_PUBLIC_MYSQL_PORT: process.env.MYSQL_PORT , 
        NEXT_PUBLIC_MYSQL_DATABASE: process.env.MYSQL_DATABASE,
        NEXT_PUBLIC_MYSQL_USER: process.env.MYSQL_USER,
        NEXT_PUBLIC_MYSQL_PASSWORD: process.env.MYSQL_PASSWORD
    },
    serverRuntimeConfig: {
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:8000/api' // development api
            : 'http://localhost:8000/api' // production api
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://api.example.com/:path*',
        },
      ]
    },
  };