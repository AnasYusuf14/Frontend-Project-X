import { RouterProvider } from "react-router-dom";
import { router } from "./Route";
import { SidebarProvider } from "./SidebarContext";

const App = () => {
  return (
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  );
};

export default App;
