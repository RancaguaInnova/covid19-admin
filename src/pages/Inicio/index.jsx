import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../login";
import Register from "../Register";
import Reset from "../Reset";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://smart.rancagua.cl/">
        Corporación de Desarrollo e Innovación de Rancagua&nbsp;
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage:
      "url(https://images.pexels.com/photos/3943901/pexels-photo-3943901.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
    //background: "#ccc",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const PageCharge = props => {
  if (props.pageInit === "Login") {
    return <Login PageCharge={PageCharge}></Login>;
  } else if (props.pageInit === "Register") {
    return <Register PageCharge={PageCharge}></Register>;
  } else if (props.pageInit === "Reset") {
    return <Reset PageCharge={PageCharge}></Reset>;
  }
};

function Inicio() {
  const [page, setPage] = React.useState("Login");
  const classes = useStyles();

  const ChangeRegister = () => {
    setPage("Register");
  };
  const ChangeLogin = () => {
    setPage("Login");
  };
  const ChangeResetPassword = () => {
    setPage("Reset");
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Administrador de Noticias covid-19 Rancagua
          </Typography>

          {page ? <PageCharge pageInit={page}></PageCharge> : ""}

          {page && page === "Login" ? (
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={ChangeRegister}
                >
                  No tienes cuenta? Registrate
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={ChangeResetPassword}
                >
                  Olvidaste tu Contraseña
                </Button>
              </Grid>
            </Grid>
          ) : (
            ""
          )}

          {page && page === "Register" ? (
            <Grid container>
              <Grid item>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={ChangeLogin}
                >
                  Ya tienes cuenta? Ingresa
                </Button>
              </Grid>
            </Grid>
          ) : (
            ""
          )}
          {page && page === "Reset" ? (
            <Grid container>
              <Grid item>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={ChangeLogin}
                >
                  Volver
                </Button>
              </Grid>
            </Grid>
          ) : (
            ""
          )}

          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}

export default Inicio;
