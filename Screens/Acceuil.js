import React from 'react'
import { View, StyleSheet, Dimensions, Text, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'

const Acceuil = (props) => {

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text}>Its time for Game</Text>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">

                <Text style={styles.text}>I will read your mind in 6 or less questions</Text>
                <Text
                    style={styles.text, { marginTop: 20, fontSize: 20 }}>
                    Choose a number between 0-99
                    </Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Guess")}  >
                        <LinearGradient
                            colors={['#CC8899', '#800080']}
                            style={styles.commencer}
                        >
                            <Text style={styles.texte}>Start the game</Text>


                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDC9Af'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },

    text: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    commencer: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',


    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    texte: {
        color: '#fff',
        fontWeight: 'bold'
    }
})
export default Acceuil