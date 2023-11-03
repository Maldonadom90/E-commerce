import * as ImagePicker from 'expo-image-picker';
import { clearUser } from '../../features/auth/authSlice';
import { deleteSession } from '../../db';
import Feather from '@expo/vector-icons/Feather';

import { Image, TouchableOpacity, Text, View } from 'react-native';
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
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA_O--Mh2cTv_HsHar7HFlUZ_Z4-kii8yWoif70z1KBg&s',
          }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <TouchableOpacity
        style={styles.cameraButton}
        onPress={pickImage}
        activeOpacity={0.7}
      >
        <Text style={styles.text}>Tomar Foto de perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cameraButton}
        onPress={confirmImage}
        activeOpacity={0.7}
      >
        <Text style={styles.text}>Confirmar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteSession} activeOpacity={0.7}>
        <Text style={styles.text2}>Cerrar Sesión</Text>
        <Feather name="log-out" size={20} onPress={logout} />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
