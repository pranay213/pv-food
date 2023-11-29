import {View, Text, StatusBar} from 'react-native';
import React, { useEffect } from 'react';
import LogoIcon from '../svg/LogoIcon';
import { useNavigation } from '@react-navigation/native';

const Splashscreen = () => {
  const navigation=useNavigation()
  useEffect(()=>
  {
    setTimeout(() => {
      navigation.navigate("Intro")
    }, 5000);
  },[])
  return (
    <View className="flex flex-1 items-center justify-center ">
       <LogoIcon />
      <Text className="text-2xl font-bold -mt-5">{'PV FOOD'}</Text>
      <StatusBar backgroundColor="#c1c1c1" hidden={true} />
    </View>
  );
};

export default Splashscreen;
