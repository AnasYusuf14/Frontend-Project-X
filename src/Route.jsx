import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Feed from "./components/shared/Feed/Feed";
import Ads from "./components/shared/Ads/Ads";
import Bookmarks from "./components/shared/Bookmarks/Bookmarks";
import Business from "./components/shared/Business/Business";
import Communities from "./components/shared/Communities/Communities";
import Create from "./components/shared/Create/Create";
import Explore from "./components/shared/Explore/Explore";
import Gork from "./components/shared/Gork/Gork";
import Jobs from "./components/shared/Jobs/Jobs";
import Lists from "./components/shared/Lists/Lists";
import Messages from "./components/shared/Messages/Messages";
import Monetization from "./components/shared/Monetization/Monetization";
import Notifications from "./components/shared/Notifications/Notifications";
import Premium from "./components/shared/Premium/Premium";
import Profile from "./components/shared/Profile/Profile";
import Setting from "./components/shared/Setting/Setting";
import { LiftSideLinks } from "./assets/LiftSideLinks/index";
const componentMap = {
  Feed,
  Explore,
  Notifications,
  Messages,
  Profile,
  Lists,
  Premium,
  Communities,
  Monetization,
  Business,
  Ads,
  Jobs,
  Create,
  Setting,
  Bookmarks,
  Gork,
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      ...LiftSideLinks.map(({ name }) => ({
        path: name.toLowerCase(),
        element: componentMap[name] ? componentMap[name]() : null,
      })),
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
