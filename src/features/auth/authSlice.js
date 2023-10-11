import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  localId: null,
  imageCamera: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      /*setea el nuevo usuario*/
      return {
        user: action.payload.email,
        token: action.payload.idToken,
        localId:
          action.payload.localId /*agrega la imagen tomada por el usuario*/,
      };
    },
    clearUser: () => {
      /*para cerrar cesión*/
      return {
        user: null,
        token: null,
        localId: null,
      }; /*devuelve los estados a nulo*/
    },
    setCameraImage: (state, action) => {
      return {
        ...state,
        imageCamera: action.payload,
      };
    },
  },
});

export const { setUser, clearUser, setCameraImage } = authSlice.actions;

export default authSlice.reducer;
