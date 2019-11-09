import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    listContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
        display: 'block'
    },
    button: {
        width: width/2
    },
    title: {
        fontSize: 50,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    }
});