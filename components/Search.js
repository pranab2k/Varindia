import React, { Component } from "react";
import {View,Alert,FlatList,RefreshControl, TouchableOpacity,Platform, ActivityIndicator, Image, Linking, Dimensions, Browser ,StyleSheet} from 'react-native';
import { Container, Header,Text, Content, Accordion ,Left,Button,Body,Title} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';
//const Entities = require('html-entities').XmlEntities; 
//const entities = new Entities();
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        searchval:'',  
        dataSourceLatestNews: [],
        serverData: [],
        serverDataCount:'',
        fetching_from_server: false,
        isVisible:true
      };
      this.timer = -1;
      this.page = 0;
    }
  componentDidMount() {
  var searchval = this.props.navigation.getParam('searchval', '');
  //alert(searchval);
  this.setState({
    searchval: searchval,
  })
    this.page = this.page + 1;
    fetch('https://varindia.com/varindiaapp/api/search.php/?results=20&keyword='+searchval+'&page=' + this.page)
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
            serverDataCount:responseJson.newsTotal,
            serverData: [ ...this.state.serverData,...responseJson.newslist],
             isLoading: false 
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
  loadMoreData = () =>  {       
      //alert(this.state.searchval); 
    this.page = this.page + 1;      
    this.setState({ fetching_from_server: true }, () => {
        clearTimeout(this.timer);      
        this.timer = -1;      
        this.timer = setTimeout(() => {
            fetch('https://varindia.com/varindiaapp/api/searchdata.php/?results=20&keyword='+this.state.searchval+'&page=' + this.page)
            .then((response) => response.json())
            .then((responseJson) =>{
              if(responseJson.dataErrot>0){               
               this.setState({isVisible:false});
               Alert.alert("No More Data");
              }else{
              this.setState({ serverData: [ ...this.state.serverData,...responseJson.newslist], fetching_from_server: false });
              }
               // this.setState({ serverData: [ ...this.state.serverData, ...responseJson.results ], fetching_from_server: false });
            })
            .catch((error) =>
            {
                //console.error(error);
                if (error.message === 'Timeout' || error.message === 'Network request failed') {
                  Alert.alert("Network request failed");
                // retry
              } else {
                throw error; // rethrow other unexpected errors
              }
            });
        }, 1500);   
    });
}

renderFooter() {
 // if (this.state.showCancel) {
  return (
      <View style = { styles.footer }>
        {  this.state.isVisible ?
          <TouchableOpacity activeOpacity = { 0.9 } onPress = { this.loadMoreData } style = { styles.loadMoreBtn }>
              <Text style = { styles.btnText}>Load More</Text>
              {
                  ( this.state.fetching_from_server )
                  ?
                      <ActivityIndicator color = "white" style = {{ marginLeft: 8 }} />
                  :
                      null
              }
          </TouchableOpacity>  
          :
          null
        }                  
      </View>
  )
  //}
}

GetNews(news_id){

// Alert.alert(news_id);
this.props.navigation.navigate('S9',{newsId:news_id});
}

ListEmpty = () => {
  return (
    //View to show when list is empty
    <View>
      <Text style={{ textAlign: 'center' }}>No Data Found</Text>
    </View>
  );
};


  render() {
    if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator size='large' />
          </View>
        );
      }else{    
    return (
      <Container>
        <Header style={styles.header} androidStatusBarColor="#be1426">
        <Left>
        <Button transparent onPress={() => this.props.navigation.goBack()}>        
        <Icon name="angle-left" size={30} color="#000000" />
            </Button>
          </Left>
          <Body>
          <Title style={styles.title}>Search Results</Title>
          </Body>
        </Header>
        <Content style={styles.content} padder>
          
    <Text>Found {this.state.serverDataCount} maching results</Text>


    <View style = { styles.container }>
      {
        ( this.state.isLoading )
        ?
          ( <ActivityIndicator size = "large" /> )
        :
          (

              <FlatList
                style = {{ width: '100%' }}
                
                keyExtractor = {( item, index ) => index }
                data = { this.state.serverData }
                renderItem = {({ item, index }) => 
                
                <TouchableOpacity  onPress={this.GetNews.bind(this,item.nid)}>             
                <View style={styles.newsCover}>                 
                  <Image source = {{ uri: item.imageurl }} style={styles.imageView} onPress={this.GetNews.bind(this,item.nid)} />            
                  <View style={styles.textView}>
                    <Text style={styles.textTitleView}  >{item.title}</Text>  
                  </View>               
                </View>  
              </TouchableOpacity>
                                            }
                                            ItemSeparatorComponent = {() => <View style = { styles.separator } /> }
                                            ListFooterComponent = { this.renderFooter.bind( this ) }
                                            ListEmptyComponent= { this.ListEmpty.bind( this ) } 
                                          />
                                      )
                                  }                
                                  </View>
        </Content>
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
    backgroundColor:'#e5e5e5'
  },
  title:{
    color:'#000'
  },
  titleTextTop:{
    color:"#FFF", fontSize:24, marginLeft:10, marginTop:16, marginBottom:8, fontFamily: 'Oswald'
  },
  
  
  newsCover:{
  flex:1, 
  flexDirection: 'row', 
  backgroundColor:'#FFF', 
  marginLeft:10, 
  marginTop:10, 
  marginRight:10, 
  borderRadius : 10
  },
  
  imageView: { 
      width: '30%',
      height: 80 ,
      margin: 7,
      borderRadius : 7,
      backgroundColor: 'transparent'
  }, 
  textView: { 
      width:'65%', 
      padding:10,
  },
  textTitleView: { 
    fontSize: 14
  },
  
  textByView: { 
    fontSize: 11,
    color: '#aaaaaa'
  },
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: ( Platform.OS === 'ios' )? 20 : 0
  },
  
  item:
  {
    padding: 10
  },
  
  separator:
  {
   
  },
  
  text:
  {
    fontSize: 20,
    color: 'black'
  },
  
  footer:
  {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1.5,
    borderTopColor: 'black'
  },
  
  loadMoreBtn:
  {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  btnText:
  {
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  }
  })