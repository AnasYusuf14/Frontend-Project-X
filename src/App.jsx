import { RouterProvider } from "react-router-dom";
import { router } from "./Route";
import { SidebarProvider } from "./SidebarContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SidebarProvider>
          <RouterProvider router={router} />
        </SidebarProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;