import React from "react"
import {
  TextInput,
  DateInput,
  SimpleForm,
  Create,
  BooleanInput,
  ImageInput,
  ImageField,
  FileInput,
  FileField,
  DateTimeInput,
  required,
  minLength,
  maxLength,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin"

const validateName = [required(), minLength(0), maxLength(100)]
const validateDescription = [minLength(0), maxLength(140)]

const validateDate = [required()]
const InfoVaccinationsCreate = (props) => (
  <Create title="Crear Información de Vacunación" {...props}>
    <SimpleForm>
      <DateInput source="date" label="Fecha" validate={validateDate} />
      <ReferenceInput
        label="Vacunatorios"
        source="vaccinationsId"
        reference="vaccinations"
        validate={[required()]}
      >
        <SelectInput optionText="name_place" />
      </ReferenceInput>
      <NumberInput source="pfizer" label="Nº Dosis Pfizer" />
      <NumberInput source="sinovac" label="Nº Dosis Sinovac" />
      <NumberInput source="cansino" label="Nº Dosis CanSino" />
      <NumberInput source="astrazeneca" label="Nº Dosis Astrazeneca" />
      <NumberInput source="johnsonjohnson" label="Nº Dosis Johnson & Johnson" />
    </SimpleForm>
  </Create>
)
export default InfoVaccinationsCreate
