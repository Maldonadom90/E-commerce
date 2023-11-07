import { Pressable, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import { insertSession } from '../../db';
import { setUser } from '../../features/auth/authSlice';
import styles from './Login.styles';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../services/authApi';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [triggerLogin] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    triggerLogin({
      email: email,
      password: password,
    })
      .unwrap()
      .then((result) => {
        dispatch(setUser(result));
        insertSession({
          localId: result.localId,
          email: result.email,
          token: result.idToken,
        })
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.text1}>Iniciar Sesión</Text>
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
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text style={{ color: 'white' }}>iniciar sesión</Text>
        </Pressable>
        <Text style={styles.text1}>No tienes una cuenta?</Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={{ color: 'white' }}>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
