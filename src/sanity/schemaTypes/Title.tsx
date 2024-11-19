export default {
  name: 'heroDescription',
  type: 'document',
  title: 'Hero Description',
  fields: [
    {
      name: 'description_en',
      type: 'text',
      title: 'Description (English)',
      description: 'The paragraph text displayed in the hero section (English)',
    },
    {
      name: 'description_pt',
      type: 'text',
      title: 'Description (Portuguese)',
      description: 'The paragraph text displayed in the hero section (Portuguese)',
    },
  ],
};
