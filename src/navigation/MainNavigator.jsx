import React, { useEffect, useState } from 'react';
import { setCameraImage, setUser } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

import AuthStackNavigator from './AuthStackNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { useGetProfileImageQuery } from '../services/shopApi';

const MainNavigator = () => {
  const { user, localId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProfileImageQuery(localId);

  useEffect(() => {
    if (data) {
      dispatch(setCameraImage(data.image));
    }
  }, [data]);

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession();
        if (session.rows.length) {
          const user = session.rows._array[0];
          dispatch(setUser(user));
        }
      } catch (error) {
        console.log('Error en obtener ususario', error.message);
      }
    })();
  }, []);

  return user ? <BottomTabNavigator /> : <AuthStackNavigator />;
};

export default MainNavigator;
