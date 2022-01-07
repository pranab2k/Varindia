import React, { Component } from "react";
import {View,Alert,ActivityIndicator, Image, Linking, Dimensions, Browser ,StyleSheet} from 'react-native';
import { Container, Header,Text, Content, Accordion ,Left,Button,Body,Title} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';
//const Entities = require('html-entities').XmlEntities; 
//const entities = new Entities();
export default class Settings extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Header style={styles.header} androidStatusBarColor="#be1426">
        <Left>
        <Button transparent onPress={() => this.props.navigation.goBack()}>        
        <Icon name="angle-left" size={30} color="#000000" />
            </Button>
          </Left>
          <Body>
          <Title style={styles.title}>Settings</Title>
          </Body>
        </Header>
        <Content style={styles.content} padder>
          
        <View style={{padding:10}}>
        <Text style={styles.textView}>App Version 1.0</Text>
        
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
  backgroundColor:'#e5e5e5'
},
title:{
  color:'#000'
},
textView:{
  backgroundColor:'#FFF',
  textAlign: "center",
  padding:10,
  marginBottom:10,
  paddingVertical: 8, 
  borderWidth: 1,
      borderColor: "#20232a",
      borderRadius: 6,
  }
})