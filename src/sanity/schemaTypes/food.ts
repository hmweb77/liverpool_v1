export default {
  name: 'food',
  type: 'document',
  title: 'Food Category',
  fields: [
    {
      name: 'category_en',
      type: 'string',
      title: 'Category (English)',
      description: 'The category of the food (e.g., Bar Snacks, The Specials) in English',
    },
    {
      name: 'category_pt',
      type: 'string',
      title: 'Category (Portuguese)',
      description: 'The category of the food (e.g., Petiscos, Os Especiais) in Portuguese',
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
          title: 'Food Item',
          fields: [
            {
              name: 'name_en',
              type: 'string',
              title: 'Food Name (English)',
              description: 'Name of the food in English (e.g., BBQ Wings).',
            },
            {
              name: 'name_pt',
              type: 'string',
              title: 'Food Name (Portuguese)',
              description: 'Name of the food in Portuguese (e.g., Asas BBQ).',
            },
            {
              name: 'price',
              type: 'string',
              title: 'Price',
              description: 'Price of the food item (e.g., €5.90).',
            },
            {
              name: 'description_en',
              type: 'text',
              title: 'Description (English)',
              description: 'Description of the food in English.',
            },
            {
              name: 'description_pt',
              type: 'text',
              title: 'Description (Portuguese)',
              description: 'Description of the food in Portuguese.',
            },
          ],
        },
      ],
    },
  ],
};
