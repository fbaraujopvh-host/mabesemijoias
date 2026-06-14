import { sanityClient } from './client';

export interface SanityProduct {
  _id: string;
  name: string;
  slug: { current: string };
  category: string;
  price: number;
  originalPrice?: number;
  image: { asset: { url: string }; alt?: string };
  description: string;
  material: string;
  badge?: string;
  badgeColor?: string;
  active: boolean;
  order?: number;
}

export interface SanitySettings {
  storeName?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  phone?: string;
  email?: string;
  instagram?: string;
  facebook?: string;
  whatsappLink?: string;
  freeShippingThreshold?: number;
}

export async function getProducts(): Promise<SanityProduct[]> {
  return sanityClient.fetch(`
    *[_type == "product" && active == true] | order(order asc, _createdAt desc) {
      _id,
      name,
      slug,
      category,
      price,
      originalPrice,
      "image": { "asset": { "url": image.asset->url }, "alt": image.alt },
      description,
      material,
      badge,
      badgeColor,
      active,
      order
    }
  `);
}

export async function getStoreSettings(): Promise<SanitySettings> {
  const results = await sanityClient.fetch(`
    *[_type == "storeSettings"][0] {
      storeName,
      heroTitle,
      heroSubtitle,
      phone,
      email,
      instagram,
      facebook,
      whatsappLink,
      freeShippingThreshold
    }
  `);
  return results ?? {};
}
