import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import { selectRestaurant } from "../features/restaurantSlice";
import { useNavigation } from "@react-navigation/native";

import { XMarkIcon } from "react-native-heroicons/solid";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1">
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <XMarkIcon color="white" size={30} className="px-6" />
        </TouchableOpacity>
        <Text className="">Order help</Text>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
