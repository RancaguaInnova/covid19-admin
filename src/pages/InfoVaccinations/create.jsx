import React from "react"
import {
  DateInput,
  SimpleForm,
  Create,
  required,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin"

const validateDate = [required()]
const InfoVaccinationsCreate = (props) => {
  const vaccination = localStorage.getItem("vaccination")

  return (
    <Create title="Crear Información de Vacunación" {...props}>
      <SimpleForm>
        <DateInput source="date" label="Fecha" validate={validateDate} />
        <ReferenceInput
          label="Vacunatorios"
          source="vaccinationsId"
          reference="vaccinations"
          validate={[required()]}
          filter={vaccination}
        >
          <SelectInput optionText="name_place" />
        </ReferenceInput>
        <NumberInput source="pfizer" label="Nº Dosis Pfizer" />
        <NumberInput source="sinovac" label="Nº Dosis Sinovac" />
        <NumberInput source="cansino" label="Nº Dosis CanSino" />
        <NumberInput source="astrazeneca" label="Nº Dosis Astrazeneca" />
        <NumberInput
          source="johnsonjohnson"
          label="Nº Dosis Johnson & Johnson"
        />
      </SimpleForm>
    </Create>
  )
}
export default InfoVaccinationsCreate
