import React from "react"
import {
  TextField,
  DateField,
  Show,
  SimpleShowLayout,
  BooleanField,
} from "react-admin"

const VaccinatiosShow = (props) => (
  <Show {...props} title="Vacunatorios" className="w100">
    <SimpleShowLayout>
      <DateField source="from" label="Desde" />
      <DateField source="to" label="Hasta" />
      <TextField source="name_place" label="Lugar de Vacunación" />
      <TextField source="address.latitude" label="Latitud" />
      <TextField source="address.longitude" label="Longitud" />
      <TextField source="phone" label="Telefono" />
      <BooleanField source="active" label="Activo" />
    </SimpleShowLayout>
  </Show>
)
export default VaccinatiosShow
