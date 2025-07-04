const HOST_URL = process.env.NEXT_PUBLIC_ENV == "production" ? process.env.NEXT_PUBLIC_API_URL_PROD : process.env.NEXT_PUBLIC_API_URL_DEV

export default HOST_URL;