import { defineConfig, isDev, SchemaType } from 'sanity';
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';


const config = defineConfig({
  basePath:"/studio",
  name: 'default',
  title: 'salmon-cod',
  projectId: 'assvtyt4',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
      types: schemaTypes,
    },studio:{
      components:{
        
      }

    },
});

export default config;
