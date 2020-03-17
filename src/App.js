import React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser
} from "react-admin";
import { FirebaseDataProvider } from "react-admin-firebase";
import spanishMessages from "@blackbox-vision/ra-language-spanish";
import polyglotI18nProvider from "ra-i18n-polyglot";
import "./App.css";
import AuthProvider from "./auth";
import News from "./pages/news";
import Inicio from "./pages/Inicio";
import { ResourceWithPermissions } from "ra-auth-acl";
import Roles from "./pages/roles";
import Users from "./pages/users";
import Actions from "./pages/actions";
import Clinics from "./pages/clinics";
import Vaccinations from "./pages/vaccinations";
const firebase = require("firebase");
require("firebase/firestore");

const i18nProvider = polyglotI18nProvider(() => spanishMessages, "es");
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASED_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};
firebase.initializeApp(firebaseConfig);

const options = {
  logging: true,
  watch: ["activities"]
};

const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = AuthProvider();

const App = () => (
  <div>
    <Admin
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      // authProvider={authProvider}
      loginPage={Inicio}
    >
      {permissions => {
        return [
          <ResourceWithPermissions name="news" {...News} />,
          <ResourceWithPermissions
            name="roles"
            {...Roles}
            permissions={permissions}
          />,
          <ResourceWithPermissions
            name="users"
            {...Users}
            permissions={permissions}
          />,
          <ResourceWithPermissions
            name="actions"
            {...Users}
            permissions={permissions}
          />
        ];
      }}
      <Resource name="news" {...News} />
      <Resource name="actions" {...Actions} />
      <Resource name="clinics" {...Clinics} />
      <Resource name="vaccinations" {...Vaccinations} />

      <Resource name="roles" {...Roles} />
      <Resource name="users" {...Users} />
    </Admin>
  </div>
);
export default App;
