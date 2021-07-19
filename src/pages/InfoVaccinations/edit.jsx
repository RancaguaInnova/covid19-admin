import React from "react"
import {
  DateInput,
  SimpleForm,
  Edit,
  required,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin"

const validateDate = [required()]
const InfoVaccinationsEdit = (props) => {
  const vaccination = localStorage.getItem("vaccination")

  return (
    <Edit {...props} title={"Editando Información de Vacunación"}>
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
    </Edit>
  )
}
export default InfoVaccinationsEdit
