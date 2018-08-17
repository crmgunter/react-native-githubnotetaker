import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native'


const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 300
    },
    login: {
        textAlign: 'center'
    },
    button: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#666',
    textAlign: 'center',
    height: 40,
    }
  });

class New extends Component {
    render() {
        return (
            <View>
                <Text style={styles.header}>Welcome to International Market Centers</Text>
                <TextInput style={styles.button} placeholder="Username or Email"/>
                <Button style={styles.login} title='Log In'/>
            </View>
        );
    }
}

export default New;