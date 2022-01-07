import React, {Component, useEffect, useState } from 'react';
import { Alart, SafeAreaView, View, Text,  Dimensions, StyleSheet } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

const  OfflineNotice = () => {
  const [isInternetReachable, setisInternetReachable] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setisInternetReachable(state.isInternetReachable);
    });
    return () => {     
      unsubscribe();
    };
  });
    if(isInternetReachable){
      return null;
    }
   //this.props.navigation.navigate('S35');
   return(<View style={{justifyContent: 'center',alignItems: 'center',flex:1}}><Text style={{fontSize:20,fontWeight:'bold', color: '#FFF'}}>No Internet Connection</Text></View>);
  
}

export default OfflineNotice;