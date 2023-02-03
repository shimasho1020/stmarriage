const contentful = require('contentful')
/**
 * Export the createClient function with
 * the default config
 */
const createClient = () => {
  return contentful.createClient({
    apiKey: process.env.firebaseApiKey,
  })
}

export default createClient