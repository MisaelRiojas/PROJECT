/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Image, Text, View,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase'
import {Container,Form,Content,Header,Item,Input,Button,Label} from 'native-base'
const FairFlyLogo = require("../img/FairFly-logo.png");
import style from './styles/LogIn';
import colors from "../styles/colors";
import ActionCreators from '../redux/actions';
import transparentHeaderStyle from '../styles/navigation';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';
import Loader from '../components/Loader';
import NavBarButton from '../components/buttons/NavBarButton';



 // Initialize Firebase
 const config = {
  apiKey: "AIzaSyDw5MexpzZsJHTQZ09z-rJGF9b9-8IAd2I",
  authDomain: "fairfly-33509.firebaseapp.com",
  databaseURL: "https://fairfly-33509.firebaseio.com",
  projectId: "fairfly-33509",
  storageBucket: "fairfly-33509.appspot.com",
  messagingSenderId: "987144693402"
};
firebase.initializeApp(config);



export default class loginScreen extends Component<> {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <NavBarButton
      handleButtonPress={() => navigation.navigate('ForgotPassword')}
      location="right"
      color={colors.white}
      text="Forgot Password"
    />,
    headerLeft: <NavBarButton
      handleButtonPress={() => navigation.goBack()}
      location="left"
      icon={<Icon name="angle-left" color={colors.white} size={30} />}
    />,
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: colors.white,
  });
constructor(props){
super(props)
this.state=({email:'',password:''})

}

signUpUser = (email,password)=>{
try{

  if (this.state.password.length<6) {

    alert('please, enter at list 6 characters')
    return;
  }


  firebase.auth().createUserWithEmailAndPassword(email,password)

}catch(error){
console.log(error.toString())
}


}


loginUser = (email,password)=>{
  try{


    firebase.auth().signInWithEmailAndPassword(email,password).then(function (user){
      console.log(user);
    })

  }catch(error){
  console.log(error.toString())
  }


  }
render() {
    return (

      <Container style={styles.container}>
<Image source={FairFlyLogo} style={{margin:'25%',
width: 200,
height: 200,
marginTop: 50,
marginBottom: 100}} />

      <Form style={{justifyContent:'flex-end'}}>
      <Label style={{color:'white'}}>  Register User:</Label>

        <Item floatingLabel>
          <Label style={{color:'white'}}>  Email</Label>
          <Input style={{color:'white'}}
          autoCorrect={false} autoCapitalize="none"
          onChangeText={(email) => this.setState({email})}
          />
        </Item>

        <Item floatingLabel style={{marginBottom:40}}>
          <Label style={{color:'white'}}> Password</Label>
          <Input style={{color:'white'}}
          onChangeText={(password) => this.setState({password})}
          autoCorrect={false} autoCapitalize="none" secureTextEntry={true}

          />
        </Item>


            <View>

              <Button style={styles.button}
              full
              rounded
              onPress={()=> this.signUpUser(this.state.email, this.state.password)}
              >
              <Text style={{color:'#27C2C8',fontSize:20}}>>></Text>
            </Button>
      </View>



      </Form>


      </Container>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#27C2C8',
  },
  footer:{
    flex:1,
    justifyContent:'space-around',
  },
  button:{
    backgroundColor:'white',
    color:'black',
    marginLeft:'83%',
    marginBottom:20,
    marginRight:15,
  }
});



      // <Text  >Hello bby </Text>

      // <Button onPress={()=> this.props.navigation.navigate('mainScreen')}
      // title="Login"/>
      // <Button onPress={()=> this.props.navigation.navigate('signScreen')}
      // title="SignUp"/>