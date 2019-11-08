import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import {styles} from "./styles/base.styles";
import {envirnment} from "./environment";

class Verses extends Component {
    constructor() {
        super();
        this.state = {verses: []}
    }
    componentDidMount() {
        fetch(`https://api.scripture.api.bible/v1/bibles/${envirnment.BIBLE_ID}/chapters/${this.props.navigation.getParam('versesId', 'GEN.1')}/verses`, {
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
                this.setState({verses: [...data]})
            }).catch(error => console.log(error));
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>King James Bible</Text>
                </View>
                <View style={styles.listContainer}>
                    {this.state.verses.map(({reference, id}) => (
                        <Button key={id} style={styles.button} title={reference} onPress={() => {}}/>
                    ))}
                </View>
            </View>
        )
    }
}

export default Verses;