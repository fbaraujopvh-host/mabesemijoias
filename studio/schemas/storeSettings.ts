import { defineField, defineType } from 'sanity';

export const storeSettingsSchema = defineType({
  name: 'storeSettings',
  title: 'Configurações da Loja',
  type: 'document',
  fields: [
    defineField({
      name: 'storeName',
      title: 'Nome da Loja',
      type: 'string',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Título do Hero',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo do Hero',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'phone',
      title: 'Telefone / WhatsApp',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'E-mail de Contato',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram (URL)',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook (URL)',
      type: 'url',
    }),
    defineField({
      name: 'whatsappLink',
      title: 'Link do WhatsApp',
      type: 'url',
      description: 'Ex: https://wa.me/5511999999999',
    }),
    defineField({
      name: 'freeShippingThreshold',
      title: 'Frete Grátis acima de (R$)',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'storeName' },
  },
});
