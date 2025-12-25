import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'route',
    title: 'Kilimanjaro Route',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'duration',
            title: 'Duration (e.g. 6-7 Days)',
            type: 'string',
        }),
        defineField({
            name: 'difficulty',
            title: 'Difficulty',
            type: 'string',
            options: {
                list: [
                    { title: 'Easy', value: 'Easy' },
                    { title: 'Medium', value: 'Medium' },
                    { title: 'Hard', value: 'Hard' },
                    { title: 'Experts Only', value: 'Experts Only' },
                ],
            },
        }),
        defineField({
            name: 'successRate',
            title: 'Success Rate (e.g. 95%)',
            type: 'string',
        }),
        defineField({
            name: 'sceneryRating',
            title: 'Scenery Rating (1-5)',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5),
        }),
        defineField({
            name: 'crowdLevel',
            title: 'Crowd Level',
            type: 'string',
            options: {
                list: ['Low', 'Medium', 'High'],
            },
        }),
        defineField({
            name: 'highlights',
            title: 'Highlights',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'overview',
            title: 'Full Overview',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'itinerary',
            title: 'Day by Day Itinerary',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'day', type: 'number', title: 'Day Number' },
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'elevation', type: 'string', title: 'Elevation Change' },
                        { name: 'time', type: 'string', title: 'Hiking Time' },
                        { name: 'description', type: 'text', title: 'Description' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'inclusions',
            title: 'Inclusions',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'price',
            title: 'Starting Price',
            type: 'number',
        }),
    ],
})
