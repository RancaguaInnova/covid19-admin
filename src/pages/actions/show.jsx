import React from "react";
import {
  TextField,
  DateField,
  Show,
  SimpleShowLayout,
  BooleanField
} from "react-admin";

const ActionShow = props => (
  <Show {...props} title="Acción" className="w100">
    <SimpleShowLayout>
      <DateField source="date" label="Fecha" showTime />
      <TextField source="description" label="Titulo" />
      <BooleanField source="active" label="Activo" />
    </SimpleShowLayout>
  </Show>
);
export default ActionShow;
