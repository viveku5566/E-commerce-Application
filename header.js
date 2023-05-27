import React from 'react';
import { Text, View,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-web';


const header = () =>{
    return (
        <View style={styles.container}>
            <TouchableOpacity>
            <Image style={styles.logo} source={require('../../assets/Instagram_Logo_2016.png')}/>
            </TouchableOpacity>

            <View style={styles.iconscontainer}>

            <TouchableOpacity>
            <Image style={styles.icon} source={{uri:'../../assets/a56d3517bb1323832680fbe7eb342da0.jpg'}}/>
            </TouchableOpacity>
                </View>

                
            <TouchableOpacity>
            <Image style={styles.icon} source={{uri:'../../assets/icons8-love-100.png'}}/>
            </TouchableOpacity>
            

            
            <TouchableOpacity>
                <view style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}></Text>
                </view>
            <Image style={styles.icon} source={{uri:'../../assets/symbole-messager-noir.png'}}/>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent : 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal : 20,
    },

    iconscontainer :{
        flexDirection :'row',
    },

    icon :{
        width : 30,
        height : 20,
        marginleft : 10,
        resizeMode : 'contain',
    },

    logo:{
        width:100,
        height:50,
        resizeMode:'contain',
    },

    unreadBadge :{
        backgrroundcolor : 'red',
        position:'absolute',
        left : 20,
        bottom : 18,
        width:25,
        height:18,
        borderradius:25,
        alignItems : 'center',
        justifyContent : 'center',
        zIndex: 100,
    },

    unreadBadgeText : {
        color : 'white',
        fontWeight : '600',
    }
})

export default header