import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId:'rifk19ri',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:'sk4hMNNr56CTyplP6y7a1S9WuoB0arCYBJwU64WD0hzsanxf8aRGe8EsyAQtATB0JSwVtuYTjizsKSPj5CH1EGaJtASneT0LCEKJ5fFYNm7CD8ly2BuPlrxJH9GewpimwMgQWZi5DoBFdZWzZM1DOA3BlgMCuGJaBn4wXb5uJMTt7TiCmJlu',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
