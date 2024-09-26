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
import AccountListSettings from "./components/shared/Setting/account/AccountSettingsList";
import Account from "./components/shared/Setting/account/Account";
import Password from "./components/shared/Setting/account/password/Password";
import DeactivateAccount from "./components/shared/Setting/account/deactivate-account/DeactivateAccount";
import CreatorSubscriptions from "./components/shared/Setting/creator_subscriptions/CreatorSubscriptions";
import SecurityAndAccountAccess from "./components/shared/Setting/security_and_account_access/SecurityAndAccountAccess";
import SecurityAndAccountAccessList from "./components/shared/Setting/security_and_account_access/SecurityAndAccountAccessList";
import AppsAndSessions from "./components/shared/Setting/security_and_account_access/apps_sessions/AppsAndSessions";
import ConnectedAccounts from "./components/shared/Setting/security_and_account_access/connected_accounts/ConnectedAccounts";
import DownloadData from "./components/shared/Setting/account/dawnload-data/DawnloadData";
import Security from "./components/shared/Setting/security_and_account_access/security/Security";
import Delegate from "./components/shared/Setting/security_and_account_access/delegate/Delegate";
import PrivacyAndSafety from "./components/shared/Setting/privacy_and_safety/PrivacyAndSafety";
import PrivacyAndSafetyList from "./components/shared/Setting/privacy_and_safety/PrivacyAndSafetyList";
import AccessibilityDisplayAndLanguages from "./components/shared/Setting/display_and_language/AccessibilityDisplayAndLanguages";
import AdditionalRecourses from "./components/shared/Setting/additional_resourses/AdditionalResourses";
import AccessibilityDisplayAndLanguagesList from "./components/shared/Setting/display_and_language/AccessibilityDisplayAndLanguagesList";
import Accessibility from "./components/shared/Setting/display_and_language/accessibilty/Accessibility";
import DataUsage from "./components/shared/Setting/display_and_language/data_usage/DataUsage";
import Display from "./components/shared/Setting/display_and_language/display/Display";
import Languages from "./components/shared/Setting/display_and_language/languages/Languages";
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
      // ...LiftSideLinks.map(({ name }) => ({
      //   path: name.toLowerCase(),
      //   element: componentMap[name] ? componentMap[name]() : null,
      // })),
      {
        path: "setting",
        element: <Setting />,
        children: [
          {
            path: "account",
            element: <Account />,
            children: [
              {
                index: true,
                element: <AccountListSettings />,
              },
              {
                path: "change_passwords",
                element: <Password />,
              },
              {
                path: "download_your_data",
                element: <DownloadData />,
              },
              {
                path: "deactivate_your_account",
                element: <DeactivateAccount />,
              },
            ],
          },
          {
            path: "monetization",
            element: <Monetization />,
          },
          {
            path: "manage_subscriptions",
            element: <CreatorSubscriptions />,
          },
          {
            path: "security_and_account_access",
            element: <SecurityAndAccountAccess />,
            children: [
              {
                index: true,
                element: <SecurityAndAccountAccessList />,
              },
              {
                path: "apps_and_sessions",
                element: <AppsAndSessions />,
              },
              {
                path: "connected_accounts",
                element: <ConnectedAccounts />,
              },
              {
                path: "security",
                element: <Security />,
              },
              {
                path: "delegate",
                element: <Delegate />,
              },
            ],
          },
          {
            path: "privacy_and_safety",
            element: <PrivacyAndSafety />,
            children: [
              {
                index: true,
                element: <PrivacyAndSafetyList />,
              },
            ],
          },
          {
            path: "notifications",
            element: <Notifications />,
          },
          {
            path: "accessibility_display_and_languages",
            element: <AccessibilityDisplayAndLanguages />,
            children: [
              {
                index: true,
                element: <AccessibilityDisplayAndLanguagesList />,
              },
              {
                path: "accessibility",
                element: <Accessibility />,
              },
              {
                path: "data_usage",
                element: <DataUsage />,
              },
              {
                path: "display",
                element: <Display />,
              },
              {
                path: "languages",
                element: <Languages />,
              },
            ],
          },
          {
            path: "additional_resources",
            element: <AdditionalRecourses />,
          },
        ],
      },
    ],
  },
]);

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         index: true,
//         element: <Feed />,
//       },
//       // ...LiftSideLinks.map(({ name }) => ({
//       //   path: name.toLowerCase(),
//       //   element: componentMap[name] ? componentMap[name]() : null,
//       // })),
//   //     {
//   //       path: "setting",
//   //       element: <Setting />,
//   //       children: [
//   //         {
//   //           path: "account",
//   //           element: <Account />,
//   //           children: [
//   //             {
//   //               index: true,
//   //               element: <AccountListSettings />,
//   //             },
//   //             {
//   //               path: "change_passwords",
//   //               element: <Password />,
//   //             },
//   //             {
//   //               path: "download_your_data",
//   //               element: <DownloadData />,
//   //             },
//   //             {
//   //               path: "deactivate_your_account",
//   //               element: <DeactivateAccount />,
//   //             },
//   //           ],
//   //         },
//   //         {
//   //           path: "monetization",
//   //           element: <Monetization />,
//   //         },
//   //         {
//   //           path: "manage_subscriptions",
//   //           element: <CreatorSubscriptions />,
//   //         },
//   //         {
//   //           path: "security_and_account_access",
//   //           element: <SecurityAndAccountAccess />,
//   //           children: [
//   //             {
//   //               index: true,
//   //               element: <SecurityAndAccountAccessList />,
//   //             },
//   //       ],
//   //     }
//   //   ],
//   // },

//   },
// ]);
