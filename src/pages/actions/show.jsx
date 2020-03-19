import React from "react";
import {
  TextField,
  DateField,
  Show,
  SimpleShowLayout,
  BooleanField
} from "react-admin";

const ActionShow = props => (
  <Show {...props} title="Recomendación" className="w100">
    <SimpleShowLayout>
      <DateField source="date" label="Fecha" showTime />
      <TextField source="description" label="Descripción de la Recomendación" />
      <BooleanField source="active" label="Activo" />
    </SimpleShowLayout>
  </Show>
);
export default ActionShow;
