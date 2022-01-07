import React,{Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LandingPage from './components/LandingPage';
import LatestNews from './components/LatestNews';
import NewArrivals from './components/NewArrivals';
import Interviews from './components/Interviews';

import Infographics from './components/Infographics';
import TechTrend from './components/TechTrend';
import FacetoFace from './components/FacetoFace';
import CyberSecurity from './components/CyberSecurity';
import NewsDetails from './components/NewsDetails';
import VideoPage from './components/VideoPage';
import VideoDetails from './components/VideoDetails';
import BreakingNews from './components/BreakingNews';
import Startup from './components/Startup';
import Technotainment from './components/Technotainment';
import MoversShakers from './components/MoversShakers';
import VarSpeak from './components/VarSpeak';
import Security from './components/Security';
import Search from './components/Search';
import Settings from './components/Settings';
import WhitePaper from './components/WhitePaper';
import Technomania from './components/Technomania';
import Sme from './components/Sme';
import SmartCity from './components/SmartCity';
import Services from './components/Services';

import Retail from './components/Retail';
import Lte from './components/Lte';
import EditorSpeak from './components/EditorSpeak';
import CSRInitiatives from './components/CSRInitiatives';
import ChannelGuru from './components/ChannelGuru';
import ChannelChief from './components/ChannelChief';
import CaseStudy from './components/CaseStudy';
import Telecom from './components/Telecom';
import Storage from './components/Storage';
import Software from './components/Software';
import Power from './components/Power';
import Peripherals from './components/Peripherals';
import Networking from './components/Networking';
import ECommerce from './components/ECommerce';
import DataCenter from './components/DataCenter';
import ChannelBuzz from './components/ChannelBuzz';
import Apps from './components/Apps';


const App=createStackNavigator(
  {
    S1: {screen:LandingPage},
    S2: {screen:LatestNews},
    S3: {screen:NewArrivals},
    S4: {screen:Interviews},

    S5: {screen:Infographics},
    S6: {screen:TechTrend},
    S7: {screen:FacetoFace},
    S8: {screen:CyberSecurity},
    S9: {screen:NewsDetails},
    S10: {screen:VideoPage},
    S11: {screen:VideoDetails},
    S12: {screen:BreakingNews},
    S13: {screen:Startup},
    S14: {screen:Technotainment},
    S15: {screen:MoversShakers},
    S16: {screen:VarSpeak},
    S17: {screen:Security},
    S18: {screen:Search},
    S19: {screen:Settings},
    S20: {screen:WhitePaper},
    S21: {screen:Technomania},
    S22: {screen:Sme},
    S23: {screen:SmartCity},
    S24: {screen:Services},
    S25: {screen:Retail},
    S26: {screen:Lte},
    S27: {screen:EditorSpeak},
    S28: {screen:CSRInitiatives},
    S29: {screen:ChannelGuru},
    S30: {screen:ChannelChief},
    S31: {screen:CaseStudy},
    S32: {screen:Telecom},
    S33: {screen:Storage},
    S34: {screen:Software},
    S35: {screen:Power},
    S36: {screen:Peripherals},
    S37: {screen:Networking},
    S38: {screen:ECommerce},
    S39: {screen:DataCenter},
    S40: {screen:ChannelBuzz},
    S41: {screen:Apps},


  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(App);