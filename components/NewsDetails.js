import React, { Component } from "react";
import {View,Share,Alert,ActivityIndicator, Image, Linking, Dimensions, Browser ,StyleSheet} from 'react-native';
import { Container, H3, Header,Text, Content, Accordion ,Left, Button,Body,Title,Fab } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';
//const Entities = require('html-entities').XmlEntities; 
//const entities = new Entities();
export default class NewsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
           isLoading: true,
            newsId: this.props.navigation.getParam('newsId', ''),
            dataSourceTitle:'',
            dataSourceSlug:'',
            dataSourceDesc:'',
            dataSourceDate:''
        }   
    } 

    NewsDetailsCall= (newsid) =>{
        //alert(newsid);

    //  alert('pp');
      return fetch('https://varindia.com/varindiaapp/api/newsdetails.php?newsid='+newsid)
             .then((response) => response.json())
             .then((responseJson) => {
              // alert(responseJson.detailstitle);
               this.setState({
                 isLoading: false,
                dataSourceTitle: responseJson.detailstitle,
                dataSourceSlug : responseJson.detailsslug,
                dataSourceImage: responseJson.detailsimageurl,   
                dataSourceDesc: responseJson.detailsDescription,
                dataSourceDate: responseJson.createdat,    
               }, function() {
                 // In this block you can do something with new state.
               });
             })
             .catch((error) => {
              // console.error(error);
              if (error.message === 'Timeout' || error.message === 'Network request failed') {
                Alert.alert("Network request failed");
              // retry
            } else {
              throw error; // rethrow other unexpected errors
            }
             });
     
     }
  


    componentDidMount(){    
        const newsId = this.props.navigation.getParam('newsId', '');
        this.NewsDetailsCall(newsId);
    } 
    
    Share = async () => {
      try {
        const result = await Share.share({
          message: entities.decode(this.state.dataSourceTitle)+" https://varindia.com/news/"+this.state.dataSourceSlug,
          title: "Varindia App",
          url:"https://varindia.com/news/"+this.state.dataSourceSlug
        });
  
        if (result.action === Share.sharedAction) {
          alert("Post Shared")
        } else if (result.action === Share.dismissedAction) {
          // dismissed
          alert("Post cancelled")
        }
      } catch (error) {
        alert(error.message);
      }
    };


  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator size='large' />
        </View>
      );
    }else{ 
      const win = Dimensions.get('window');
        const ratio = (win.width)/540; //640 is actual image width
        const imagewidth = win.width;
        const imageheight = 300 * ratio;
    return (
      <Container>
       
        <Header style={styles.header} androidStatusBarColor="#be1426" >
        <Left>
        <Button transparent onPress={() => this.props.navigation.goBack()}>        
                <Icon name="angle-left" size={30} color="#000000" />
            </Button>
          </Left>
          <Body>
          <Title style={{color:'#000', textAlign: "left"}}>News</Title>
          </Body>
        </Header>
        <Content style={styles.content} >
        
        <Image source={{uri: this.state.dataSourceImage}} style={{width: imagewidth, height: imageheight,
           borderRadius: 3}} />

<View>  
    <H3 style={styles.textTitle}>{this.state.dataSourceTitle}</H3>
    <Text style={styles.textByView}>By VARINDIA {this.state.dataSourceDate}</Text> 
<Text style={styles.textContent}>{this.state.dataSourceDesc}</Text>        
        </View>
        </Content>
        
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#c51527' }}
            position="bottomRight"
            onPress={()=>this.Share()}>
            <Icon name="share-alt" />            
          </Fab>
        
      </Container>
    );
  }
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
  backgroundColor:'#eeeeee', padding: 15
},
paragraph: {
  color: "red",
  textDecorationColor: "yellow",
  textShadowColor: "red",
  textShadowRadius: 1,
  margin: 24
},
title:{
  color:'#000', paddingTop: 15
},
textTitle:{
  paddingTop:20, textAlign:'left', fontFamily: 'Roboto', color: '#333333', paddingBottom: 3
},
textContent:{
 textAlign:'justify', fontFamily: 'Roboto', color: '#666666', position:'relative', marginBottom: 0
},
textByView: {   
  fontFamily: 'Roboto', 
  paddingBottom: 15, 
  color: '#999999',
  fontSize: 12
  },
  p: {
    margin: 0, padding:0, backgroundColor: 'pink'
  }
})