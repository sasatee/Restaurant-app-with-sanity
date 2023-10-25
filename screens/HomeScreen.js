import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {View, Text, SafeAreaView, Image, TextInput, ScrollView} from "react-native";
import {
  UserIcon,
  ChevronDownIcon,


} from "react-native-heroicons/outline";

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity"









export default HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories,setfeaturedCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() =>{
      sanityClient
    .fetch
    (
      `
      *[_type == "featured"]{
        ...,
        restaurants[] ->{
          ...,
          dishes[]->,
          type ->{
            name
          }
        },
      }


      `
    )
    .then((data)=>{
      setfeaturedCategories(data);
    })

  },[]);
  //console.log(featuredCategories);
  return (
    <SafeAreaView className="bg-white pt-10">

        {/* header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4  ">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text clasName="font-bold text-xxl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          
          <UserIcon size={35} color="#00CCBB" />
        </View>
        {/*search*/}

        <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
           <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3" >
             <FontAwesome name="search"  color="gray" size={20} />
             <TextInput placeholder="Restaurants and cuisines"
                        KeyboardType="default"
             />


             </View>
          <AntDesign name="menuunfold" size={20}  color="#00CCBB"/>
        </View>
            {/*body*/}
           <ScrollView
               className="bg-gray-100"
               contentContainerStyle={{

                 paddingBottom:100
               }}

           >
             {/* categories*/}
             <Categories/>


      

               {/*featured*/}

               {featuredCategories?.map(category =>(
                   <FeaturedRow
                       key={category._id}
                       id={category._id}
                       title={category.name}
                       description ={category.short_description}

                   />
               ))}


         

       
           </ScrollView>
    </SafeAreaView>
  );
};

