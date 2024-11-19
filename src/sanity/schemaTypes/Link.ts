export default {
    name: 'dynamicLink',
    type: 'document',
    title: 'Dynamic Link',
    fields: [
      {
        name: 'label',
        type: 'string',
        title: 'Label',
        description: 'The text displayed for the link (e.g., "Link to menu").',
      },
      {
        name: 'url',
        type: 'url',
        title: 'URL',
        description: 'The destination URL for the link.',
        validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({
          scheme: ['http', 'https'],
        }),
      },
    ],
  };
  