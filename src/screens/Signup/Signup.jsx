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
  const [triggerSignup] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    triggerSignup({
      email: email,
      password: password,
    })
      .unwrap()
      .then((result) => {
        console.log(result);
        dispatch(setUser(result));
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.text1}>Registrate para ingresar</Text>
        <TextInput
          style={styles.inputEmail}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputEmail}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.inputEmail}
          value={confirmPass}
          onChangeText={setConfirmPass}
        />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text style={{ color: 'white' }}>Registrarse</Text>
        </Pressable>
        <Text style={styles.text1}>Ya tienes una cuenta?</Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ color: 'white' }}>Iniciar Sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;
