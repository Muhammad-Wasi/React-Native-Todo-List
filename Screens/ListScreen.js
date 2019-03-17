import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {
    Container, Button, Icon, List, ListItem,
} from 'native-base';
import { ListView } from 'react-native';

export default class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            basic: true,
            list: [],
        }

        this._update = this._update.bind(this);
        this._delete = this._delete.bind(this);
    }

    componentWillReceiveProps(props) {
        const { list } = props;
        var listArr = list.reverse()
        this.setState({ list: listArr })
    }

    _update(data) {
        this.props.update(data)
    }

    _delete(data) {
        this.props.delete(data)
    }

    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const { list } = this.state;
        return (
            <Container style={styles.container}>
                {
                    list ?
                        <View>
                            <Text style={styles.text}>My List</Text>
                        </View>
                        :
                        null
                }
                <ScrollView
                    scrollEnabled={true}
                    scrollsToTop={true}
                    style={styles.listView}
                >
                    <List
                        leftOpenValue={55}
                        rightOpenValue={-55}
                        dataSource={this.ds.cloneWithRows(list)}
                        renderRow={data =>
                            <ListItem style={styles.list}>
                                <Text style={styles.data}>{data} </Text>
                            </ListItem>}
                        renderLeftHiddenRow={data =>
                            <Button full onPress={() => this._update(data)}>
                                <Icon active name='add' />
                            </Button>}
                        renderRightHiddenRow={data =>
                            <Button full danger onPress={() => this._delete(data)}>
                                <Icon active name="trash" />
                            </Button>}
                    />
                    {/* {
                        list.map(item => {
                            return <View style={styles.item}>
                                <Text style={styles.list}>{item}</Text>
                            </View>
                        })
                    } */}
                </ScrollView>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
    },
    listView: {
        height: 200,
    },
    text: {
        fontSize: 20,
        color: '#19BBB4',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    data: {
        textAlign: 'center',
        marginLeft: 15
    },
    item: {
        marginTop: 3,
        marginBottom: 3,
        marginLeft: 30,
        marginRight: 30,
        borderWidth: 1,
        borderColor: '#04BCAF',
        borderRadius: 5,
    },
    list: {
        color: '#19BBB4',
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderColor: "#04BCAF"
    }
})