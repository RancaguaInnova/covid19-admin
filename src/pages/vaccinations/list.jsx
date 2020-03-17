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

const VaccinationList = ({ ...props }) => (
  <List {...props} title="Listado Vacunatorios">
    <Datagrid rowClick="edit">
      <DateField source="from" label="Desde" />
      <DateField source="to" label="Hasta" />
      <TextField source="name_place" label="Lugar de Vacunación" />
      <BooleanField source="active" label="Activo" />
      <EditButton label="Editar" />
      <DeleteButton label="Eliminar" />
    </Datagrid>
  </List>
);

export default VaccinationList;
