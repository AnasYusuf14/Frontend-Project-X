import { RouterProvider } from "react-router-dom";
import { router } from "./Route";
import { SidebarProvider } from "./SidebarContext";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "./assets/rtk/features/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (token) {
      dispatch(setAuthenticated(true)); // Update the authentication state
      if (userProfile) {
        dispatch(setUser(userProfile)); // Update the user profile state
      }
    } else {
      dispatch(setAuthenticated(false)); // Ensure the state is false if no token
    }
  }, [dispatch]);

  return (
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  );
};

export default App;