// utils/client.js

import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2021-09-01', // or whichever version you're using
  useCdn: false // set this to true if you want to enable the Content Delivery Network
});

export default client;
