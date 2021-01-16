import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';


export default class Guess extends Component {
    constructor() {
        super();
        this.state = {
            low: 0,
            mid: 50,
            high: 100,
            guessesLeft: 6
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.text}>
                    Is your number {this.state.mid}?
                </Text>
                <View >

                    <View style={styles.header }>
                        <TouchableOpacity style={styles.answerButtons} onPress={this.userWon}>
                            <Text style={styles.textAnswers}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.isSmaller} style={styles.answerButtons}>
                            <Text style={styles.textAnswers}>No, it's smaller</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.isBigger} style={styles.answerButtons}>
                            <Text style={styles.textAnswers}>No, it's bigger</Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={{
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={styles.answerButtons} onPress={this.refresh}><Text style={styles.textAnswers}>Refresh Game</Text></TouchableOpacity>
                </View>
            </View>

        );


    }

    userWon = () => {
        alert('I win, I guessed your number in ' + (6 - this.state.guessesLeft) + ' tries.');
    }

    isSmaller = () => {
        if (this.state.guessesLeft == 0) {
            alert('Okay, you cheated.');
        }
        else {
            this.setState((state) => ({
                high: state.mid
            }));
            this.setState((state) => ({
                mid: parseInt((state.high + state.low) / 2),
                guessesLeft: (state.guessesLeft - 1)
            }));
        }
    }
    isBigger = () => {
        if (this.state.guessesLeft == 0) {
            alert('Okay, you cheated.');
        }
        else {
            this.setState((state) => ({
                low: state.mid
            }));
            this.setState((state) => ({
                mid: parseInt((state.high + state.low) / 2),
                guessesLeft: (state.guessesLeft - 1)
            }));
        }
    }

    refresh = () => {
        this.setState({
            low: 0,
            mid: 50,
            high: 100,
            guessesLeft: 6
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDC9Af',
        justifyContent: 'center',

    },
    header: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginLeft: 10, 
        marginRight: 10, 
        marginTop: 20 
    },
    text: {

        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
       
    },

    
    answerButtons: {
        width: 80,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#F5F5DC',
        borderColor: '#00EAA1',
        marginTop: 30,
    },
    textAnswers: {
        textAlign: 'center'
    }
});