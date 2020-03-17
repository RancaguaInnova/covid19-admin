import React from "react";
import {
  TextField,
  DateField,
  Show,
  SimpleShowLayout,
  BooleanField
} from "react-admin";
const NewsShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="date" label="Fecha" showTime locales="es-ES" />
      <TextField source="title" label="Titulo" />
      <TextField source="subtitle" label="SubTitulo" />
      <TextField source="description" label="Descripción" />
      <BooleanField source="active" label="Activo" />
    </SimpleShowLayout>
  </Show>
);
export default NewsShow;
