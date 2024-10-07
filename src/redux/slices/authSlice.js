import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: "",
  username: "",
  fullName: "",
  password: "",
  identifier: "",
  isCreateAccountModalOpen: false,
  isSignInModalOpen: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    toggleCreateAccountModal: (state) => {
      state.isCreateAccountModalOpen = !state.isCreateAccountModalOpen;
    },
    toggleSignInModal: (state) => {
      state.isSignInModalOpen = !state.isSignInModalOpen;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setFormData, toggleCreateAccountModal, toggleSignInModal, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;