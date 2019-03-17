import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import loginStyle from './styles/login';
import { Container, Header, Content, Form, Item, Input, Left, Right, Body } from 'native-base';
import ListScreen from './ListScreen';
import { HTTP } from '../utils/HTTP'
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            listArr: [],
            edit: false,
            updatedindex: null
        }

        this._add = this._add.bind(this);
        this._edit = this._edit.bind(this);
        this._update = this._update.bind(this);
        this._delete = this._delete.bind(this);
    }

    componentDidMount() {
        HTTP('get', '/list/getAll')
            .then(response => {
                console.log(response, "response from get All text")
            }, (err) => {
                console.log(err, "error from add text");
            })
    }

    _add() {
        const { text, listArr } = this.state;
        let data = {
            text: text
        }
        HTTP('post', '/list/add', data)
            .then(response => {
                console.log(response, "response from add text")
            }, (err) => {
                console.log(err.message, "error from add text");
            })
        listArr.push(text)
        this.setState({ listArr, text: '' })
    }

    _edit() {
        const { text, listArr, updatedindex } = this.state;
        listArr.splice(updatedindex, 1, text);
        this.setState({
            listArr,
            text: '',
            updatedindex: null,
            edit: false
        })
    }

    _update(data) {
        const { listArr } = this.state;
        var index = listArr.indexOf(data);
        this.setState({
            updatedindex: index,
            text: data,
            edit: true,
        })
    }

    _delete(data) {
        const { listArr } = this.state;
        var index = listArr.indexOf(data);
        listArr.splice(index, 1)
        this.setState({ listArr })
    }

    render() {
        const { text, listArr, edit } = this.state;
        return (
            <Container style={loginStyle.container}>
                <Header style={loginStyle.header}>
                    {/* <Left style={loginStyle.left}><Text>Back</Text></Left> */}
                    {/* <Body style={loginStyle.body}><Text style={styles.header}>Todo List</Text></Body> */}
                    <Body><Text style={styles.header}>Todo List</Text></Body>
                    {/* <Right style={loginStyle.right}><Text>Forward</Text></Right> */}
                </Header>
                <View style={styles.inputView}>
                    <TextInput value={text} onChangeText={(text) => this.setState({ text: text })} style={styles.input} placeholder="Write something..." />
                </View>
                <View style={styles.buttonView}>
                    {
                        edit ?
                            <TouchableOpacity style={styles.opacity} onPress={this._edit}>
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.opacity} onPress={this._add}>
                                <Text style={styles.buttonText}>Add</Text>
                            </TouchableOpacity>
                    }
                </View>
                <ListScreen update={this._update} delete={this._delete} list={listArr} />
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        left: 130
    },
    inputView: {
        marginTop: 20,
    },
    input: {
        width: 250,
        height: 45,
        borderWidth: 1,
        borderColor: '#04BCAF',
        backgroundColor: "#E2F1F0",
        left: 60,
        borderRadius: 8,
        paddingLeft: 12
    },
    buttonView: {
        marginTop: 10,
        borderColor: 'red',

    },
    opacity: {
        left: 150,
        width: 60,
        height: 30,
        borderWidth: 1,
        backgroundColor: "#04BCAF",
        borderRadius: 4,
        paddingLeft: 14,
        paddingTop: 2,

    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }
})