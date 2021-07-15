import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Alert from "../Alert"
import { makeStyles } from "@material-ui/core/styles"
import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"
import Typography from "@material-ui/core/Typography"

const firebaseConfig2 = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASED_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
}

const Firebase2 = firebase.initializeApp(firebaseConfig2, "AUTH2")

export default function Reset() {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    image: {
      backgroundImage:
        "url(https://images.pexels.com/photos/3943901/pexels-photo-3943901.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
      //background: '#ccc',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }))

  const classes = useStyles()

  let [email, setEmail] = useState("")

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const [alert, setAlert] = useState({ open: false, title: "", body: "" })

  const submit = async (e) => {
    e.preventDefault()

    if (!email) {
      setAlert({
        open: true,
        title: "Formulario inclompleto!",
        body: "Por favor indique su Email",
      })
      return
    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setAlert({
        open: true,
        title: "Email inválido!",
        body: "Por favor verifique su email",
      })
      return
    }

    try {
      Firebase2.auth()
        .sendPasswordResetEmail(email)
        .then(function () {
          setAlert({
            open: true,
            title: "Atención!",
            body: "Se ha enviado un email para recuperar su contraseña",
          })
        })
        .catch(function (error) {
          var errorCode = error.code
          var errorMessage = error.message
          // [START_EXCLUDE]
          if (errorCode === "auth/invalid-email") {
            setAlert({
              open: true,
              title: "Atención!",
              body: errorMessage,
            })
          } else if (errorCode === "auth/user-not-found") {
            setAlert({
              open: true,
              title: "Atención!",
              body: errorMessage,
            })
          }
          console.log(error)
          // [END_EXCLUDE]
        })
    } catch (error) {
      setAlert({
        open: true,
        title: "Error!",
        body: `Ocurrión un error al realizar la recuperación de contraseña: ${error.message}`,
      })
      return
    }
  }

  return (
    <form className={classes.form} noValidate onSubmit={submit}>
      <Typography component="h2">
        Ingrese su Email para recuperar su contraseña
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
        type="email"
        onChange={handleEmailChange.bind(this)}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Enviar
      </Button>

      <Alert handleClose={() => setAlert({ open: false })} {...alert} />
    </form>
  )
}
