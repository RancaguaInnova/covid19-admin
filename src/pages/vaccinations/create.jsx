import React from "react"
import {
  TextInput,
  DateInput,
  SimpleForm,
  Create,
  required,
  BooleanInput,
} from "react-admin"

const validateDate = [required()]
const VaccinationCreate = ({ classes, ...props }) => {
  return (
    <Create title="Crear Vacunatorio" {...props}>
      <SimpleForm redirect={"/vaccinations"}>
        <DateInput source="from" label="Fecha desde" validate={validateDate} />
        <DateInput source="to" label="Fecha hasta" validate={validateDate} />
        <TextInput source="name_place" label="Lugar de Vacunación" fullWidth />
        <TextInput
          source="businessHours"
          label="Horario de Atención"
          fullWidth
        />
        <TextInput source="complete_address" label="Direción" fullWidth />
        <TextInput source="address.latitude" label="Latitud" />
        <TextInput source="address.longitude" label="Longitud" />
        <TextInput source="phone" label="Telefono" />
        <TextInput source="googleMapLink" label="Google Map Link" fullWidth />
        <BooleanInput source="temp" label="Temporal" />
        <BooleanInput source="active" label="Activo" />
      </SimpleForm>
    </Create>
  )
}
export default VaccinationCreate
