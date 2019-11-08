import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Book from './Book';
import Chapter from './Chapter';
import Verses from './Verses';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
    Book: Book,
    Chapter: Chapter,
    Verses: Verses
})

const _App = createAppContainer(MainNavigator);

export default class App extends Component {

  render() {
    return (
          <_App/>
    );
  }
}