const contentful = require('contentful')
/**
 * Export the createClient function with
 * the default config
 */
const createClient = () => {
  return contentful.createClient({
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_ID,
    measurementId: process.env.FB_MEASUREMENT_ID,
  })
}

export default createClient