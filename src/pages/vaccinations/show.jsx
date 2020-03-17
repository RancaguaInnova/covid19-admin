import React from "react";
import {
  TextField,
  DateField,
  Show,
  SimpleShowLayout,
  BooleanField
} from "react-admin";

const VaccinatiosShow = props => (
  <Show {...props} title="Vacunatorios" className="w100">
    <SimpleShowLayout>
      <DateField source="from" label="Desde" />
      <DateField source="to" label="Hasta" />
      <TextField source="name_place" label="Lugar de Vacunación" />
      <BooleanField source="active" label="Activo" />
    </SimpleShowLayout>
  </Show>
);
export default VaccinatiosShow;
