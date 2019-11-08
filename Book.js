import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import {envirnment} from "./environment";
import {styles} from "./styles/base.styles";


class Book extends Component {
    constructor() {
        super();
        this.state = {books: []}
    }

    randomNumber = () => {
        return Math.floor(Math.random() * 100);
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

    _buttonPress(e) {
        alert(e);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>King James Bible</Text>
                </View>
                <View style={styles.listContainer}>
                    {this.state.books.map(({name, id}) => (
                        <Button key={id} style={styles.button} title={name} onPress={() => navigate('Chapter',{bookId: id})}/>
                    ))}
                </View>
            </View>
        )
    }

}


export default Book;