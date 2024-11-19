export default {
  name: 'drink',
  type: 'document',
  title: 'Drink Category',
  fields: [
    {
      name: 'category_en',
      type: 'string',
      title: 'Category (English)',
      description: 'The category of the drinks (e.g., Signature Cocktails, Classic Cocktails) in English',
    },
    {
      name: 'category_pt',
      type: 'string',
      title: 'Category (Portuguese)',
      description: 'The category of the drinks (e.g., Cocktails Assinatura, Cocktails Clássicos) in Portuguese',
    },
    {
      name: 'sortOrder',
      type: 'number',
      title: 'Sort Order',
      description: 'The order in which this category should appear. Lower numbers appear first.',
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): any; new(): any; }; }; }) => Rule.required().min(1),
    },
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [
        {
          type: 'object',
          title: 'Drink Item',
          fields: [
            {
              name: 'name_en',
              type: 'string',
              title: 'Drink Name (English)',
              description: 'Name of the drink in English (e.g., Red Glory).',
            },
            {
              name: 'name_pt',
              type: 'string',
              title: 'Drink Name (Portuguese)',
              description: 'Name of the drink in Portuguese.',
            },
            {
              name: 'price',
              type: 'string',
              title: 'Price',
              description: 'Price of the drink item (e.g., €9.00).',
            },
            {
              name: 'description_en',
              type: 'text',
              title: 'Description (English)',
              description: 'Description of the drink in English.',
            },
            {
              name: 'description_pt',
              type: 'text',
              title: 'Description (Portuguese)',
              description: 'Description of the drink in Portuguese.',
            },
          ],
        },
      ],
    },
  ],
};
