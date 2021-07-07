import React from "react"
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
  ReferenceField,
} from "react-admin"

const InfoVaccinationsList = (props) => (
  <List {...props} title="Información de Vacunación">
    <Datagrid rowClick="edit">
      <DateField source="date" label="Fecha" />
      <ReferenceField
        label="Vacunatorios"
        source="vaccinationsId"
        reference="vaccinations"
      >
        <TextField source="name_place" />
      </ReferenceField>
      <TextField source="pfizer" label="Nº Dosis Pfizer" />
      <TextField source="sinovac" label="Nº Dosis Sinovac" />
      <TextField source="cansino" label="Nº Dosis CanSino" />
      <TextField source="astrazeneca" label="Nº Dosis Astrazeneca" />
      <TextField source="johnsonjohnson" label="Nº Dosis Johnson & Johnson" />
      <EditButton label="Editar" />
      <DeleteButton label="Eliminar" />
    </Datagrid>
  </List>
)
export default InfoVaccinationsList
