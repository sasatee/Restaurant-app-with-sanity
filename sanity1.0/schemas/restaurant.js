

export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name:"name",
      type:"string",
      title:"Restaurant name",
      validation: (Rule) => Rule.required(),

    },
    {
      name:"short_description",
      type:"string",
      title:"Short description",
      validation: (Rule) => Rule.required(200),

    },

    {
      name:"image",
      type:"image",
      title:"Image of the restaurant"


    },
    {
      name:"lat",
      type:"number",
      title:"Latitude of the Restaurant"


    },
    {
      name:"long",
      type:"number",
      title:"Longitude of the restaurant"


    },
    {
      name:"address",
      type:"string",
      title:"Restaurant Address",
      validation: (Rule) => Rule.required(),


    },

    {
      name:"rating",
      type:"string",
      title:"Enter a rating form (1-5 Stars)",
      validation: (Rule) =>
          Rule.required()
              .min(1)
              .max(5)
              .error("Please enter a value between 1 and 5"),

    },
    {
      name:"type",
      title:"Category",
      validation:(Rule)=> Rule.required(),
      type:"reference",
      to:[{type: "category"}]
    },

    {
      name:"dishes",
      title:"Dishes",
      type:"array",
      of:[{ type:"reference",to:[{ type:"dish" }]  }],
    }

  ],


};
