import React from 'react'
import {
    View, Text, StyleSheet,
    TextInput, TouchableOpacity,
    Dimensions, Animated, Image,
    Easing, Alert, ActivityIndicator, KeyboardAvoidingView 
} from 'react-native'
import img from '../images/imgReact.png'

const { width, height } = Dimensions.get('window');
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: new Animated.Value(-400),
            background: new Animated.Value(0),
            opacityValue: new Animated.Value(1),
            email: '',
            password: '',
            animating: false

        }
    }
    upAnimation = () => {

        Animated.timing(this.state.opacityValue, {
            toValue: 0,
            duration: 400,
            easing: Easing.circle
        }).start()

        Animated.timing(this.state.background, {
            toValue: 350,
            duration: 500,
            easing: Easing.circle
        }).start()

        Animated.timing(this.state.form, {
            toValue: 0,
            duration: 500,
            easing: Easing.circle
        }).start()

    }

    downAnimattion = () => {

        Animated.timing(this.state.background, {
            toValue: 0,
            duration: 600,
            easing: Easing.linear
        }).start()

        Animated.timing(this.state.form, {
            toValue: -400,
            duration: 550,
            easing: Easing.linear
        }).start()
        Animated.timing(this.state.opacityValue, {
            toValue: 1,
            duration: 500,
            easing: Easing.cubic
        }).start()
    }

    _Login = () => {
        this.setState({ animating: true })
        const Email = this.state.email;
        const Pass = this.state.password;


        if (Email == '' || Pass == '') {
            Alert.alert('Status', 'Email or Password is wrong')
        } else {
            Alert.alert('Status', 'Hello' + Email + ' ' + Pass)
        }
        this.setState({ animating: false })

    }


    render() {
        return (
            <View  style={styles.container}>
                {/* Image background */}
                <Animated.View style={[StyleSheet.absoluteFill, { marginBottom: this.state.background, alignItems:'center', height: height/2 }]}>

                    <Animated.Image
                        source={img}
                        style={{ flex: 1, width: width, height: height}} />

                </Animated.View>
                {/* button */}
                <Animated.View style={[{ height: height/2  }, { opacity: this.state.opacityValue }]}>
                    <TouchableOpacity style={[styles.btn,{borderWidth:0.3}]}
                        onPress={this.upAnimation}>
                        <Text style={[styles.textTitleButton, { color: 'black' }]}>Login</Text>
                    </TouchableOpacity>
                </Animated.View>
                {/* form */}
                <Animated.View style={[styles.form, { marginBottom: this.state.form }]}>
                    <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>LOGIN</Text>
                    <ActivityIndicator
                        size="large"
                        animating={this.state.animating} />
                    <TextInput style={styles.textInput}
                        placeholder="Email"
                        placeholderTextColor='black'
                        onChangeText={(email) => this.setState({ email })}>
                    </TextInput>
                    <TextInput style={styles.textInput}
                        placeholder="Password"
                        placeholderTextColor='black'
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}>
                    </TextInput>
                    <TouchableOpacity
                        style={[styles.btn, { backgroundColor: '#009900', height: 50 }]}
                        onPress={this._Login.bind(this)}>
                        <Text style={styles.textTitleButton}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btn, { backgroundColor: 'orange', height: 50 }]}
                        onPress={this.downAnimattion}>
                        <Text style={styles.textTitleButton}>CANCEL</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    animationView: {
        backgroundColor: 'skyblue',
        flex: 1,
        position: "absolute",
    },
    btn: {
        backgroundColor: '#fff',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,

    },
    form: {
    },
    textInput: {
        borderWidth: 0.5,
        height: 50,
        marginVertical: 5,
        marginHorizontal: 20,
        borderRadius: 20,
        paddingLeft: 10,
        backgroundColor: '#fff'
    },
    textTitleButton: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#fff'
    }
})