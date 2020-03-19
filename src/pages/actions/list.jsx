import React from "react";
import {
  Datagrid,
  EditButton,
  List,
  BooleanField,
  TextField,
  DeleteButton,
  DateField
} from "react-admin";

const ActionList = ({ ...props }) => (
  <List {...props} title="Listado Recomendaciones">
    <Datagrid rowClick="edit">
      <DateField source="date" label="Fecha" showTime />
      <TextField source="description" label="Titulo" />
      <BooleanField source="active" label="Activo" />
      <EditButton label="Editar" />
      <DeleteButton label="Eliminar" />
    </Datagrid>
  </List>
);

export default ActionList;
