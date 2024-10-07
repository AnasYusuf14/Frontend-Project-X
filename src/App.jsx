import { RouterProvider } from "react-router-dom";
import { router } from "./Route";
import { SidebarProvider } from "./SidebarContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { ourAuth } from "firebase";
const queryClient = new QueryClient();

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   ourAuth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       dispatch(authUser);
  //     } else {
  //       dispatch(null);
  //     }
  //   });
  // }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </QueryClientProvider>
  );
};

export default App;
