import { Pressable, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { setUser } from '../../features/auth/authSlice';
import styles from './Login.styles';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../services/authApi';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [triggerLogin, result] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    triggerLogin({
      email,
      password,
    });

    if (result.isSuccess) {
      dispatch(setUser(result.data));
      insertSession({
        localId: result.data.localId,
        email: result.data.email,
        token: result.data.idToken,
      })
        .then((result) => console.log(result))
        .catch((error) => console.log(error.message));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={{ fontSize: 20 }}>Ingresa tu cuenta</Text>
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
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text style={{ color: 'white' }}>Iniciar sesión</Text>
        </Pressable>
        <Text style={{ paddingBottom: 10 }}>
          No tienes una cuenta registrada?
        </Text>
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
