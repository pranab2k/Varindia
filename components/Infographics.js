import React, { Component } from 'react';
import { Image,ImageBackground, View,Text, TextInput, TouchableHighlight, Dimensions, StyleSheet,TabHeading } from 'react-native';
import { Container, Content, Drawer, Header, Left, Item, Body, Right, Button,  Title,Tab, Tabs,Footer ,FooterTab} from 'native-base';
const Entities = require('html-entities').XmlEntities; 
//const entities = new Entities();
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Infographics extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  render() {
    const win = Dimensions.get('window');
    const ratio = (win.width)/500; //1024 is actual image width
    const imagewidth = win.width/2 -12;
    const imageheight = (imagewidth * ratio);
    return (
      <Container>
        <Header style={styles.header} androidStatusBarColor="#be1426">
        <Left>
        <Button transparent onPress={() => this.props.navigation.goBack()}>        
        <Icon name="angle-left" size={30} color="#000000" />
            </Button>
          </Left>
          <Body>
          <Title style={styles.title}>Infographics</Title>
          </Body>
        </Header>
        <Content style={styles.content}>
        <View style={{flex:1, flexDirection: 'row-reverse', width: imagewidth}}>   
        <Image source = {{uri: 'https://qa.monest.com/monestapp/image/slider/501.jpg'}} style={{width: imagewidth, height: imageheight, position:'relative'}} />
        <Text style={{fontSize:10,
        color:'black', backgroundColor:'transparent', position:'absolute', bottom:0,left:0,right:0, textAlign: 'left', padding:10, color:'#FFF', fontWeight:'bold'}}>Demo Demo </Text>
        </View>  
        <View style={{flex:1, flexDirection: 'row-reverse', width: imagewidth}}>   
        <Image source = {{uri: 'https://qa.monest.com/monestapp/image/slider/501.jpg'}} style={{width: imagewidth, height: imageheight, position:'relative'}} />
        <Text style={{fontSize:10,
        color:'black', backgroundColor:'transparent', position:'absolute', bottom:0,left:0,right:0, textAlign: 'left', padding:10, color:'#FFF', fontWeight:'bold'}}>Demo Demo </Text>
        </View>








    <View style={{flex:1, flexDirection: 'row'}}>    
       <View style={{flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',padding:1, marginLeft:10 }}>
       <Image source = {{uri: 'https://qa.monest.com/monestapp/image/slider/501.jpg'}} style={{flexGrow:1, width: imagewidth, height: imageheight}} />
        <Text style={{fontSize:10,
        color:'black', backgroundColor:'transparent',
        
        textAlign: 'center'}}>Demo Demo </Text>
        </View>
        <View style={{padding:1,height: imageheight }}>
        <Image source = {{uri: 'https://qa.monest.com/monestapp/image/slider/501.jpg'}} style={{width: imagewidth, height: imageheight}} />  
        <Text>Demo Demo </Text>
        </View>
    </View>


    <View style={{padding:20}}>    
       <View style={{padding:2}}>
       <Image source = {{uri: 'https://qa.monest.com/monestapp/image/slider/501.jpg'}} style={{width: imagewidth, height: imageheight, position:'relative'}} />
        <Text style={{fontSize:10,
        color:'black', backgroundColor:'transparent', position:'absolute', bottom:0,left:0,right:0, textAlign: 'left', padding:10, color:'#FFF', fontWeight:'bold'}}>Demo Demo </Text>
        </View>
        <View style={{padding:2}}>
       <Image source = {{uri: 'https://qa.monest.com/monestapp/image/slider/501.jpg'}} style={{width: imagewidth, height: imageheight, position:'relative'}} />
        <Text style={{fontSize:10,
        color:'black', backgroundColor:'transparent', position:'absolute', bottom:0,left:0,right:0, textAlign: 'left', padding:10, color:'#FFF', fontWeight:'bold'}}>Demo Demo </Text>
        </View>
    </View>
        
       <View>
         
       </View>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  legalButton: {
  flex: 1,
  alignItems: "center",
  width: 350,
  alignSelf: 'center',
  marginTop:20,
 // marginBottom:20
},
header:{
  backgroundColor:  'transparent',
},
content:{
  backgroundColor:'#eeeeee'
},
title:{
  color:'#000'
},
imageView: {
 height:100,
  width: '100%', 

},

})