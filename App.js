import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Book from './Book';
import Chapter from './Chapter';
import Verses from './Verses';
import Verse from './Verse';
import Bible from './Bibles';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {ThemeProvider, Header, Icon} from 'react-native-elements';
import NavigationService from './NavigationService';
const theme = {
    Button: {
        raised: true,
        containerStyle: {
            marginBottom: 10
        }
    }
}
const MainNavigator = createStackNavigator({
    Bible: Bible,
    Book: Book,
    Chapter: Chapter,
    Verses: Verses,
    Verse: Verse,
},  {
    initialRouteName: 'Bible',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
        header: (<Header
            centerComponent={{ text: 'Bible Quote Me', style: { color: '#fff' , fontSize: 20}}}
            leftComponent={<Icon color='#fff' name='home' onPress={() => NavigationService.navigate('Bible', {test: 'test'})}/>}
        />)
    },
})

const _App = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
        <ThemeProvider theme={theme}>
        <View>
            <_App
                ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}/>
        </View>
        </ThemeProvider>
    );
  }
}