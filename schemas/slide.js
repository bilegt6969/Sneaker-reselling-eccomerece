// pets.js
export default {
  name: 'pet',
  type: 'document',
  title: 'banner',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'main',
      type: 'string',
      title: 'Main'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Photo'
    },
    {
      name: 'secondPhoto',
      type: 'image',
      title: 'Second Photo'
    },
    {
      name: 'button',
      type: 'object',
      title: 'Button',
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Text'
        }
      ]
    }
  ]
}
