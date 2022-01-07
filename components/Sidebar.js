import React, { Component } from 'react';
import {View, AsyncStorage,ActivityIndicator, Image, Linking, TouchableOpacity, Dimensions, Browser, StyleSheet,createAppContainer, createSwitchNavigator } from 'react-native';
import { Container, Header, Content, Button, ListItem, Text,  Left, Body, Right, Switch } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Sidebar extends Component{
  constructor(props) {
    super(props)
    this.state = {};   
}

  render() {
     // const {navigate} = this.props.navigation;     
      // 
      
    return (
      <Container>        
        <Content style={{backgroundColor:"#ececec"}}>  
       
        <ListItem style={{alignSelf: 'flex-end',padding:0}}>
        <Left>
        <Image source = {{uri: "https://varindia.com/varindiaapp/images/varindia-logo.png" }} style={{width:120, height:24}} /> 
        </Left>
                <Icon active name="close" size={20} color="#000" onPress={()=>this.props.closeDrawer()} /> 
          </ListItem>  
          <ListItem icon onPress={()=>this.props.closeDrawer()} style={{backgroundColor:"#FFF", marginLeft:0}} >
            <Left>
              <Icon name="home-outline" size={20} color="#000" style={{paddingLeft:20}} />                 
            </Left>
            <Body>
              <Text >Home</Text>
            </Body>  
            <Icon name="chevron-right" size={20} color="#000" style={{paddingRight:20}} />            
          </ListItem>
          <ListItem icon> 
          <Left>
        <Image source = {{uri: "https://varindia.com/varindiaapp/images/cyber-security-icon.png" }} style={{width:20, height:20}} /> 
        </Left>           
            <Body>
              <Text onPress={() => this.props.navigation.navigate('S8')}>Cyber Security</Text>
            </Body>            
          </ListItem>
          
          <ListItem icon> 
          <Left>
        <Image source = {{uri: "https://varindia.com/varindiaapp/images/movers-shakers-icon.png" }} style={{width:20, height:20}} /> 
        </Left>            
            <Body>
              <Text onPress={() => this.props.navigation.navigate('S15')}>Movers & Shakers</Text>
            </Body>            
          </ListItem>
          <ListItem icon> 
          <Left>
        <Image source = {{uri: "https://varindia.com/varindiaapp/images/startup-icon.png" }} style={{width:20, height:20}} /> 
        </Left>            
            <Body>
              <Text onPress={() => this.props.navigation.navigate('S13')}>Start-up</Text>
            </Body>            
          </ListItem>
          <ListItem icon> 
          <Left>
        <Image source = {{uri: "https://varindia.com/varindiaapp/images/technotainments-icon.png" }} style={{width:20, height:20}} /> 
        </Left>            
            <Body>
              <Text onPress={() => this.props.navigation.navigate('S14')}>Technotainment</Text>
            </Body>            
          </ListItem>
          <ListItem icon>
          <Left>
        <Image source = {{uri: "https://varindia.com/varindiaapp/images/tech-trends-icon.png" }} style={{width:20, height:20}} /> 
        </Left> 
            <Body>
              <Text onPress={() => this.props.navigation.navigate('S6')}>Tech Trend</Text>
            </Body>            
          </ListItem>
          <ListItem icon>
          <Left>
        <Image source = {{uri: "https://varindia.com/varindiaapp/images/var-speak-icon.png" }} style={{width:20, height:20}} /> 
        </Left>             
            <Body>
              <Text onPress={() => this.props.navigation.navigate('S16')}>Var Speak</Text>
            </Body>            
          </ListItem>          
          <ListItem icon>  
          <Left>
        <Image source = {{uri: "https://varindia.com/varindiaapp/images/video-icon.png" }} style={{width:20, height:20}} /> 
        </Left>           
            <Body>
              <Text onPress={() => this.props.navigation.navigate('S10')}>Video</Text>
            </Body>            
          </ListItem> 
          <ListItem>            
            <Body>
            <TouchableOpacity  onPress={ ()=>{ Linking.openURL('https://varindia.com/admanager/www/delivery/ck.php?oaparams=2__bannerid=13__zoneid=1__cb=b90b069c72__oadest=https%3A%2F%2Fwww.teamviewer.com%2Fen%2Fcontent%2Fchannel-partner-registration-india')}}>
            <Image source = {{uri: "https://varindia.com/varindiaapp/images/team-viewer.jpg" }} style={{width:"100%", height:208}} /> 
            </TouchableOpacity>
            </Body>            
          </ListItem> 
        </Content>
      </Container>
    );
  }
}