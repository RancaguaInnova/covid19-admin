import React from "react";
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EditButton,
  DeleteButton,
  DateField
} from "react-admin";

const NewsList = props => (
  <List {...props} title="Listado de noticias covid-19">
    <Datagrid rowClick="edit">
      <DateField source="date" label="Fecha" showTime />
      <TextField source="title" label="Titulo" />
      {/*       <TextField source="subtitle" label="Subtitulo" />
       */}

      <BooleanField source="active" label="Activo" />
      <EditButton label="Editar" />
      <DeleteButton label="Eliminar" />
    </Datagrid>
  </List>
);
export default NewsList;
