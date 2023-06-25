
export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Photo',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Description of the product',
      validation: Rule => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'Price of the product',
      validation: Rule => Rule.required().positive(),
    },
    
  ],
  preview: {
    select: {
      title: 'title',
      photo: 'photo',
      price: 'price',
      rating: 'rating',
    },
    prepare({ title, photo, price, rating }) {
      return {
        title: title,
        subtitle: `Price: $${price} Rating: ${rating} stars`,
        media: photo,
      };
    },
  },
};

