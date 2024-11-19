export default {
    name: 'offeringsImages',
    type: 'document',
    title: 'Offerings Images',
    fields: [
      {
        name: 'img1',
        type: 'image',
        title: 'Image 1',
        description: 'The first image for the offerings section',
        options: {
          hotspot: true, // Enable image cropping and hotspot selection
        },
      },
      {
        name: 'img2',
        type: 'image',
        title: 'Image 2',
        description: 'The second image for the offerings section',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  