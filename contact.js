import React, { useState } from "react";
import { View,Text,StyleSheet, TextInput, TouchableOpacity } from "react-native";

const contactForm = () =>{
const [agree,setagree] = useState(false);

    return(
        <View style={styles.mainContainer}>
        <Text style={styles.mainHeader}>
            Login Form
        </Text>
        <Text style={styles.description}>
        You can reach us anytime via info@shriyanbuildcon.com
        </Text>
        <view style={styles.inputContainer}>
        <Text style={styles.labels}>
            Enter your Name
        </Text>
        <TextInput style={styles.inputStyle}
        autoCapitalize = 'none'
        autoCorrect ={false}
        />
        </view>
        <view style={styles.inputContainer}>
        <Text style={styles.labels}>
            Enter your Password
        </Text>
        <TextInput style={styles.inputStyle}
        autoCapitalize = 'none'
        autoCorrect ={false}
        secureTextEntry = {true}
        />
        </view>
        <view style={styles.wrapper}>
        <Checkbox
        value = {agree}
        onValueChange = {() => setagree(!agree)}
        color = {agree ? "#00000" : undefined}
        />

        <Text style={styles.wrapperText}>
        I have read and Agree with Terms and Condition
        </Text>
        </view>
        <TouchableOpacity style={[styles.buttonStyle,
        {
         backgroundColor = {agree ? "#00000" : "grey"},   
        },]}
        disabled = {!agree}
        >
            <Text style={styles.buttonText}>
                LOGIN
            </Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create (
    {
        mainContainer : {
            height : "100%",
            paddingHorizontal : 30,
            paddingTop : 30,
            backgroundColor : #fff
        },
        mainHeader : {
            height : "100%",
            paddingHorizontal : 30,
            paddingTop : 30,
            backgroundColor : #fff,
            marginBottom : 10,
            marginBottom : 5,
            
        },
        description : {
            height : "100%",
            paddingHorizontal : 30,
            paddingTop : 30,
            backgroundColor : #fff,
            marginBottom : 10,
            marginBottom : 5, 
        },
        inputContainer: {
            height : "100%",
            paddingHorizontal : 30,
            paddingTop : 30,
            backgroundColor : #fff,
            marginBottom : 10,
            marginBottom : 5, 
        },

    }
)


export default contactForm;