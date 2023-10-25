import {View, Text, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import  CategoriesCard from "./CategoryCard"
import sanityClient from "../sanity"

import {urlFor} from "../sanity";

export default Categories = () => {

    const [categories,setCategories] =useState([])

    useEffect(() => {
        sanityClient.fetch(`
          *[_type == "category"]
        
        
        `).then(data =>{
            setCategories(data);
        })
    }, [])
  return (
    <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
            paddingHorizontal:13,
            paddingTop:10
        }}


    >

        {categories.map((category)=>(
            <CategoriesCard
               key={category._id}
               imgUrl={urlFor(category.image).width(200).url()}
               title={category.name}

            />

        ))}


    </ScrollView>
  );
}

