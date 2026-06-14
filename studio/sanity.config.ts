import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { productSchema } from './schemas/product';
import { storeSettingsSchema } from './schemas/storeSettings';

export default defineConfig({
  name: 'sol-semijoias',
  title: 'Sol Semi-Joias',
  projectId: 'tanjm5z6',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Sol Semi-Joias')
          .items([
            S.listItem()
              .title('💍 Produtos')
              .child(S.documentTypeList('product').title('Produtos')),
            S.divider(),
            S.listItem()
              .title('⚙️ Configurações da Loja')
              .child(
                S.document()
                  .schemaType('storeSettings')
                  .documentId('storeSettings')
                  .title('Configurações')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: [productSchema, storeSettingsSchema],
  },
});
