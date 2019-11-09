import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';
import {envirnment} from "./environment";
import {styles} from "./styles/base.styles";
import { Button } from 'react-native-elements';


class Book extends Component {
    constructor() {
        super();
        this.state = {books: []}
    }
    componentDidMount() {
        fetch(`https://api.scripture.api.bible/v1/bibles/${envirnment.BIBLE_ID}/books`, {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin,
            headers: {
                'Content-Type': 'application/json',
                'api-key': `${envirnment.API_KEY}`
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(res => res.json())
            .then(({data}) => {
                console.log(data);
                this.setState({books: [...data]})
            }).catch(error => console.log(error));
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{this.props.navigation.getParam('bookName', 'Failed to get book name')}</Text>
                </View>
                <View style={styles.listContainer}>
                    {this.state.books.map(({name, id}) => (
                        <Button key={id} title={name} onPress={() => navigate('Chapter',{bookId: id})}/>
                    ))}
                </View>
            </View>
        )
    }

}


export default Book;