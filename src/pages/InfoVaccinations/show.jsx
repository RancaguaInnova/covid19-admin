import React from "react"
import {
  TextField,
  DateField,
  Show,
  SimpleShowLayout,
  BooleanField,
  ReferenceField,
} from "react-admin"
const InfoVaccinationsShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
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
    </SimpleShowLayout>
  </Show>
)
export default InfoVaccinationsShow
