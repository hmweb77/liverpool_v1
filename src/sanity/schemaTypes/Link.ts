export default {
    name: 'dynamicLink',
    type: 'document',
    title: 'Food Link',
    fields: [
      {
        name: 'label',
        type: 'string',
        title: 'Label',
        description: 'The text displayed for the link (e.g., "Link to to menu").',
      },
      {
        name: 'url',
        type: 'url',
        title: 'URL',
        description: 'The destination URL to for the link.',
        validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({
          scheme: ['http', 'https'],
        }),
      },
    ],
  };
