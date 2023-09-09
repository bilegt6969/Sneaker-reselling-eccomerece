import { defineConfig, isDev, SchemaType } from 'sanity';
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

const devOnlyPlugins: SchemaType[] = [];

const config = defineConfig({
  name: 'default',
  title: 'salmon-cod',
  projectId: 'assvtyt4',
  dataset: 'production',
  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],
  parts: [
    // Define your schema types here
    // For example:
    // { name: 'mySchemaType', type: 'document', title: 'My Schema Type' }
  ],
});

export default config;
