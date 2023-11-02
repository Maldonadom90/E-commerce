import * as ImagePicker from 'expo-image-picker';
import { clearUser } from '../../features/auth/authSlice';
import { deleteSession } from '../../db';
import Feather from '@expo/vector-icons/Feather';

import { Image, Pressable, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCameraImage } from '../../features/auth/authSlice';
import styles from './Profile.styles';
import { usePostProfileImageMutation } from '../../services/shopApi';

const Profile = ({}) => {
  const image = useSelector((state) => state.auth.imageCamera);
  const { localId } = useSelector((state) => state.auth);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearUser());
    deleteSession();
  };
  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      });
      if (!result.canceled) {
        console.log(result.assets);
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        );
      }
    }
  };

  const confirmImage = () => {
    triggerSaveProfileImage({ image, localId });
    console.log(result);
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <Pressable style={styles.cameraButton} onPress={pickImage}>
        <Text>Tomar Foto de perfil</Text>
      </Pressable>
      <Pressable style={styles.cameraButton} onPress={confirmImage}>
        <Text>Confirmar</Text>
      </Pressable>
      <Feather name="log-out" size={24} onPress={logout} />
    </View>
  );
};

export default Profile;
