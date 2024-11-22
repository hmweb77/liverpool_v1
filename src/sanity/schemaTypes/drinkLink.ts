export default {
    name: 'drinkLink',
    type: 'document',
    title: 'Drink Link',
    fields: [
      {
        name: 'label',
        type: 'string',
        title: 'Label',
        description: 'The text displayed for the link (e.g., "Link to to drink").',
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
    