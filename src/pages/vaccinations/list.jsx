import React from "react"
import {
  Datagrid,
  EditButton,
  List,
  BooleanField,
  TextField,
  DeleteButton,
} from "react-admin"
import DateField from "../../helpers/fields/DateField"

const VaccinationList = ({ ...props }) => (
  <List {...props} title="Listado Vacunatorios">
    <Datagrid rowClick="edit">
      <DateField source="from" label="Desde" />
      <DateField source="to" label="Hasta" />
      <TextField source="name_place" label="Lugar de Vacunación" />
      <TextField source="googleMapLink" label="Google Map Link" />
      <TextField source="phone" label="Telefono" />
      <BooleanField source="active" label="Activo" />
      <EditButton label="Editar" />
      <DeleteButton label="Eliminar" />
    </Datagrid>
  </List>
)

export default VaccinationList
