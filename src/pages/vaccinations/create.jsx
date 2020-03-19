import React from "react";
import {
  TextInput,
  DateInput,
  SimpleForm,
  Create,
  required,
  minLength,
  maxLength,
  BooleanInput
} from "react-admin";

const validateName = [required(), minLength(0), maxLength(5550)];
const validateDate = [required()];
const VaccinationCreate = ({ classes, ...props }) => {
  return (
    <Create label="Crear" title="Crear Vacunatorio" {...props}>
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
        <BooleanInput source="temp" label="Temporal" />

        <BooleanInput source="active" label="Activo" />
      </SimpleForm>
    </Create>
  );
};
export default VaccinationCreate;
