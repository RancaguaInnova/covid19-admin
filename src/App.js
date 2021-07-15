import React from "react"
import { Admin } from "react-admin"
import { FirebaseDataProvider } from "react-admin-firebase"
import spanishMessages from "@blackbox-vision/ra-language-spanish"
import polyglotI18nProvider from "ra-i18n-polyglot"
import "./App.css"
import AuthProvider from "./auth"
import News from "./pages/news"
import Inicio from "./pages/Inicio"
import { ResourceWithPermissions } from "ra-auth-acl"
import Roles from "./pages/roles"
import Users from "./pages/users"
import Actions from "./pages/actions"
import Clinics from "./pages/clinics"
import Vaccinations from "./pages/vaccinations"
import InfoVaccinations from "./pages/InfoVaccinations"

import Services from "./pages/services"
import Statistics from "./pages/statistics"

import firebase from "firebase"

require("firebase/firestore")

const i18nProvider = polyglotI18nProvider(() => spanishMessages, "es")
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASED_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
}
firebase.initializeApp(firebaseConfig)

const options = {
  logging: false,
}

const dataProvider = FirebaseDataProvider(firebaseConfig, options)
const authProvider = AuthProvider()

const App = () => (
  <Admin
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    authProvider={authProvider}
    loginPage={Inicio}
  >
    {(permissions) => {
      return [
        <ResourceWithPermissions
          name="news"
          {...News}
          permissions={permissions}
        />,
        <ResourceWithPermissions
          name="statistics"
          {...Statistics}
          permissions={permissions}
        />,

        <ResourceWithPermissions
          name="actions"
          {...Actions}
          permissions={permissions}
        />,
        <ResourceWithPermissions
          name="clinics"
          {...Clinics}
          permissions={permissions}
        />,
        <ResourceWithPermissions
          name="vaccinations"
          {...Vaccinations}
          permissions={permissions}
        />,
        <ResourceWithPermissions
          name="infovaccinations"
          {...InfoVaccinations}
          permissions={permissions}
        />,
        <ResourceWithPermissions
          name="services"
          {...Services}
          permissions={permissions}
        />,
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
      ]
    }}
  </Admin>
)
export default App
