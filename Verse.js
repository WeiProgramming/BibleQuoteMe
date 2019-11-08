import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import {styles} from "./styles/base.styles";
import {envirnment} from "./environment";

class Verse extends Component {
    constructor() {
        super();
        this.state = {verse: {}}
    }
    componentDidMount() {
        this.getVerse(this.props.navigation.getParam('verse', 'GEN1.1'));
    }

    getVerse(verseId) {
        fetch(`https://api.scripture.api.bible/v1/bibles/${envirnment.BIBLE_ID}/verses/${verseId}`, {
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
                this.setState({verse: data})
            }).catch(error => console.log(error));
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>King James Bible</Text>
                </View>
                <View style={styles.listContainer}>
                    <Text>{this.state.verse.content? this.state.verse.content.replace(/(<([^>]+)>)/ig, '') : 'Loading'}</Text>
                </View>
                <View>
                    <Button title={this.state.verse.previous? this.state.verse.previous.id : 'Loading'} onPress={() => this.getVerse(this.state.verse.previous? this.state.verse.previous.id : 'Loading')}/>
                    <Button title={this.state.verse.next? this.state.verse.next.id : 'Loading'} onPress={() => this.getVerse(this.state.verse.next? this.state.verse.next.id : 'Loading')}/>
                </View>
            </View>
        )
    }
}

export default Verse;