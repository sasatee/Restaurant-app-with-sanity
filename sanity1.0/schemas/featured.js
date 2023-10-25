

export default {
    name: 'featured',
    title: 'Featured Menu categories',
    type: 'document',
    fields: [
        {
            name:"name",
            type:"string",
            title:"Featured Category name",
            validation: (Rule) => Rule.required(),

        },
        {
            name:"short_description",
            type:"string",
            title:"Short description",
            validation: (Rule) => Rule.required(200),

        },

        {
            name:"restaurants",
            type:"array",
            title:"restaurants",
            of:[{ type:"reference",to:  [{ type:"restaurant" }] }]


        },


    ],

};
