import { defineField, defineType } from 'sanity';

export const productSchema = defineType({
  name: 'product',
  title: 'Produto',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome do Produto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Colares', value: 'colares' },
          { title: 'Pulseiras', value: 'pulseiras' },
          { title: 'Brincos', value: 'brincos' },
          { title: 'Anéis', value: 'aneis' },
          { title: 'Conjuntos', value: 'conjuntos' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Preço (R$)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'originalPrice',
      title: 'Preço Original / De (R$)',
      type: 'number',
      description: 'Preencha apenas se o produto estiver em promoção',
    }),
    defineField({
      name: 'image',
      title: 'Imagem Principal',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'material',
      title: 'Material',
      type: 'string',
      description: 'Ex: Banhado a Ouro 18k, Prata 925, Rose Gold',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Selo / Badge',
      type: 'string',
      options: {
        list: [
          { title: 'Nenhum', value: '' },
          { title: 'Novo', value: 'Novo' },
          { title: 'Oferta', value: 'Oferta' },
          { title: 'Mais Vendido', value: 'Mais Vendido' },
          { title: 'Exclusivo', value: 'Exclusivo' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'badgeColor',
      title: 'Cor do Selo',
      type: 'string',
      options: {
        list: [
          { title: 'Dourado', value: 'gold' },
          { title: 'Rosa', value: 'rose' },
          { title: 'Verde', value: 'green' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'active',
      title: 'Produto Ativo',
      type: 'boolean',
      description: 'Desative para ocultar o produto da vitrine',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Ordem de Exibição',
      type: 'number',
      description: 'Menor número aparece primeiro',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      price: 'price',
      category: 'category',
    },
    prepare({ title, media, price, category }) {
      return {
        title,
        media,
        subtitle: `${category} — R$ ${price?.toFixed(2)}`,
      };
    },
  },
});
