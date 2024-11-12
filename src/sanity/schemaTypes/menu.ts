// sanity/schemas/menu.js
export default {
    name: 'menu',
    title: 'Menu',
    type: 'document',
    fields: [
      {
        name: 'drinks',
        title: 'Drinks',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'category',
                title: 'Category',
                type: 'string'
              },
              {
                name: 'items',
                title: 'Items',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'name',
                        title: 'Name',
                        type: 'string'
                      },
                      {
                        name: 'price',
                        title: 'Price',
                        type: 'string'
                      },
                      {
                        name: 'description',
                        title: 'Description',
                        type: 'text'
                      },
                      {
                        name: 'bestseller',
                        title: 'Bestseller',
                        type: 'boolean'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'food',
        title: 'Food',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'category',
                title: 'Category',
                type: 'string'
              },
              {
                name: 'items',
                title: 'Items',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'name',
                        title: 'Name',
                        type: 'string'
                      },
                      {
                        name: 'price',
                        title: 'Price',
                        type: 'string'
                      },
                      {
                        name: 'description',
                        title: 'Description',
                        type: 'text'
                      },
                      {
                        name: 'bestseller',
                        title: 'Bestseller',
                        type: 'boolean'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  