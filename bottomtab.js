import { View } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-web'

export const bottomtabicons =[
    {
        name:'Home',
        active : 'C:\Users\vivek\AwesomeProject\my-react-app\assets\Instagram-home-icon-on-transparent-background-PNG',
        inactive : 'C:\Users\vivek\AwesomeProject\my-react-app\assets\Instagram-home-icon-on-transparent-background-PNG',
    },

    {
        name: 'Search',
        active: 'C:\Users\vivek\AwesomeProject\my-react-app\assets\8-85921_search-instagram-search-icon-vector',
        inactive : 'C:\Users\vivek\AwesomeProject\my-react-app\assets\8-85921_search-instagram-search-icon-vector',
    },

    {
        name : 'Reels',
        active : 'C:\Users\vivek\AwesomeProject\my-react-app\assets\instagram-reel-4896209-4069491.png',
        inactive :'C:\Users\vivek\AwesomeProject\my-react-app\assets\instagram-reel-4896209-4069491.png',
    },

    {
        name: 'Save',
        active :'C:\Users\vivek\AwesomeProject\my-react-app\assets\5662990.PNG',
        inactive : 'C:\Users\vivek\AwesomeProject\my-react-app\assets\5662990.PNG',
    },

    {
        name : 'Profile',
        active: 'C:\Users\vivek\AwesomeProject\my-react-app\assets\3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
        inactive : 'C:\Users\vivek\AwesomeProject\my-react-app\assets\3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
    },
]

const bottomtab = ({icons}) => {

    const [activetab,setactivetab] = useState('Home')

    const icon = ({icon}) => (
        <TouchableOpacity onPress={()=>setactivetab(icon.name)}>
        <Image source={{uri :activetab === icon.name ? 
        icon.active:icon.inactive}}
        style={[styles.icon,icon.name === 'Profile' ? 
        styles.profilePic() : null,
        activetab === 'Profile' && icon.name === activetab ? 
        styles.profilePic(activetab):null,
        ]}/>
        </TouchableOpacity>
    )
  return (
    <View style={styles.wrapper}>
        <Divider width={1} orientation ='vertical'/>
    <View style={styles.container}>
      {icons.map((icon,index)=>(
      <icon key={index}icon={icon}/>
      ))}
    </View>
    </View>
  )
}

const styles = StyleSheet.create ({
    wrapper:{
        position:'absolute',
        width:'100%',
        bottom:'3%',
        zIndex:999,
        backgroundColor : '#000'
    },


    container :{
        flexDirection :'row',
        justifyContent: 'space-around',
        height :50,
        paddingTop:10,
    },

    icon : {
        width: 30,
        height:30,
    },

    profilePic :(activetab='')=>({
        borderRadius :50,
        borderWidth : activetab === 'Profile' ? 2: 0,
        boderColor : '#fff',
    }),

})

export default bottomtab