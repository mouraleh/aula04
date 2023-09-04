import react,{useState} from "react";
import {View,Text,TextInput,Button,StyleSheet} from"react";


const LoginScreen = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    

    const mudarLogin=()=>{
        console.login ('Login com Email: ${email}e senha:${password}');

    };

    return(
        <View>
            <Text>Tela de Login</Text>
            <TextInput
    
            
            />
        </View>
    )
    

};

const styles = StyleSheet.create({
    containe:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }
})

