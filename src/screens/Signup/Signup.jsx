import { Pressable, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { setUser } from '../../features/auth/authSlice';
import styles from './Signup.styles';
import { useDispatch } from 'react-redux';
import { useSignUpMutation } from '../../services/authApi';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [triggerSignup, result] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(email, password, confirmPass);
    triggerSignup({
      email,
      password,
    });
    console.log(result);
    if (result.isSuccess) {
      dispatch(setUser(result.data));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={{ fontSize: 20, color: 'white' }}>Registrarse</Text>
        <TextInput
          style={styles.inputEmail}
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          placeholderTextColor={'white'}
        />
        <TextInput
          style={styles.inputEmail}
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          placeholderTextColor={'white'}
        />
        <TextInput
          style={styles.inputEmail}
          value={confirmPass}
          onChangeText={setConfirmPass}
          placeholder="Confirmar contraseña"
          placeholderTextColor={'white'}
        />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text style={{ color: 'black' }}>Registrarse</Text>
        </Pressable>
        <Text style={{ paddingBottom: 10, color: 'white' }}>
          Ya tienes una cuenta registrada?
        </Text>
        <Pressable
          style={styles.loginButton}
          onPress={() =>
            navigation.navigate('Login')
          } /*boton de navegación hacia login*/
        >
          <Text style={{ color: 'black' }}>Iniciar sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;
