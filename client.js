import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'assvtyt4',
  dataset: 'production',
  apiVersion: '2021-09-29',
  useCdn: true,
})

export default client
