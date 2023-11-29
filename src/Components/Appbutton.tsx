import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'

const Appbutton = (props:any) => {
    const {title}=props
  return (
    <TouchableOpacity className='w-1/2  items-center rounded-lg h-10 justify-center bg-[#F44748] opacity-85 ' {...props} >
      <Text className='font-semibold text-xl text-white'>{title}</Text>
    </TouchableOpacity>
  )
}

export default Appbutton