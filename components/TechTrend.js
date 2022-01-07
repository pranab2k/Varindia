import React, { Component } from "react";
import {View,Alert,ActivityIndicator, Image, Linking, Dimensions, Browser ,StyleSheet} from 'react-native';
import { Container, Header,Text, Content, Accordion ,Left,Button,Body,Title} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';
//const Entities = require('html-entities').XmlEntities; 
//const entities = new Entities();
export default class TechTrend extends Component {
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
          <Title style={styles.title}>Tech Trend</Title>
          </Body>
        </Header>
        <Content style={styles.content} padder>
          <View style={{padding:10}}>
        <Text style={styles.textView} onPress={()=>{this.props.navigation.navigate('S32')}}>Telecom</Text>
        <Text style={styles.textView} onPress={()=>{this.props.navigation.navigate('S33')}}>Storage</Text>
        <Text style={styles.textView} onPress={()=>{this.props.navigation.navigate('S13')}}>Startup</Text>
        <Text style={styles.textView} onPress={()=>{this.props.navigation.navigate('S34')}}>Software</Text>
        <Text style={styles.textView} onPress={()=>{this.props.navigation.navigate('S17')}}>Security</Text>
        <Text style={styles.textView} onPress={()=>{this.props.navigation.navigate('S35')}}>Power</Text>
        <Text style={styles.textView} onPress={()=>{this.props.navigation.navigate('S36')}}>Peripherals</Text>
        <Text style={styles.textView} onPress={()=>{this.props.navigation.navigate('S37')}}>Networking</Text>
        <Text style={styles.textView} onPress={()=>{this.props.navigation.navigate('S26')}}>LTE</Text>
        <Text style={styles.textView} onPress={()=>{this.props.navigation.navigate('S38')}}>E-Commerce</Text>
        <Text style={styles.textView} onPress={()=>{this.props.navigation.navigate('S39')}}>Data Center</Text>
        <Text style={styles.textView} onPress={()=>{this.props.navigation.navigate('S40')}}>Channe lBuzz</Text>
        <Text style={styles.textView} onPress={()=>{this.props.navigation.navigate('S41')}}>Apps</Text>
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