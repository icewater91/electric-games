export default {
  name: 'game',
  type: 'document',
  title: 'Game',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'platform',
      type: 'string',
      title: 'Platform',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'releaseYear',
      type: 'number',
      title: 'Release Year',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}
