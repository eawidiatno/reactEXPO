import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

const index = () => {

    const loginData = () => {
        // console.log('Klik Login', form)
        // console.warn('Hasil Form ', form)
        // navigation.navigate('MainApp')

    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 24, backgroundImage: "./assets/images/tisb_splash.png" }}>


            <View style={{ alignItems: 'center' }}>
                <Text style={{ marginBottom: 8, fontWeight: 'bold', fontFamily: 'PoppinsBold', fontSize: 22 }}>Selamat Datang</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ textAlign: 'center', marginBottom: 48, fontSize: 18, fontFamily: 'Poppins' }}>Silakan masuk dan menjadi sukses bersama kami.</Text>
            </View>
            <View>
                <ImageBackground
                    source={require('../assets/images/bg_regarsport.png')}
                    resizeMode="contain"
                    tintColor={'#E8D4A2'}
                >
                    <View>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={{ height: 21 }} />
                    <View>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={{ height: 71 }} />

                </ImageBackground>
            </View>

            <TouchableOpacity onPress={loginData} style={{ backgroundColor: Colors.greyColors, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 150 }}>
                <Text style={{ fontFamily: 'Poppins', fontWeight: 'bold', color: Colors.whiteColors }}>Masuk</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ marginTop: 30, fontWeight: 'bold', fontFamily: 'Oleo', fontSize: 26 }}>Teman itu Sukses Bareng</Text>
            </View>


        </View>
    )
}

export default index

const styles = StyleSheet.create({
    input: {
        height: 51,
        borderWidth: 1,
        borderColor: Colors.greyColors,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: Colors.blackColors,
    },

})