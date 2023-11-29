import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import Sweet from '../Images/sweat.jpg';
import Food from '../Images/food.jpg';
import Biryani from '../Images/biryani.jpg';
import Appbutton from '../Components/Appbutton';

const Intro = () => {
  return (
    <ImageBackground source={Biryani} resizeMode="cover" className='flex flex-1 bg-opacity-25'>
      <View className="flex flex-1 items-center w-100  flex-row justify-center flex-wrap space-x-6  ">
        <View className="flex items-center justify-center h-full text-center mx-auto  w-full ">
          <Text className="flex flex-col text-3xl font-bold text-center text-white ">
            {'Search Your '}
          </Text>
          <Text className="text-3xl text-center text-white">
            {' Favorite '}{' '}
            <Text className="text-[#F44748] font-bold">{'Food'}</Text>
          </Text>
          <Text className="w-2/5 text-center mt-5 text-[#c1c1c1] text-md font-semiboldc">
            {'Discover the foods from over all nearby restaurants.'}
          </Text>

          <Appbutton title={'Get Started'} className="absolute bottom-10" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Intro;
