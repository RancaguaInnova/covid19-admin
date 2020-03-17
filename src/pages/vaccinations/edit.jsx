import React from "react";
import {
  TextInput,
  SimpleForm,
  DateInput,
  required,
  minLength,
  maxLength,
  Edit,
  BooleanInput
} from "react-admin";

const validateName = [required(), minLength(0), maxLength(5550)];
const validateDate = [required()];
const VaccinationEdit = ({ permissions, ...props }) => {
  return (
    <Edit title="Editar Vacunatorio" {...props}>
      <SimpleForm redirect={"/vaccinations"}>
        <DateInput source="from" label="Fecha desde" validate={validateDate} />
        <DateInput source="to" label="Fecha hasta" validate={validateDate} />
        <TextInput source="name_place" label="Lugar de Vacunación" />
        <TextInput source="businessHours" label="Horario de Atención" />
        <TextInput source="complete_address" label="Direción" />
        <TextInput source="address.latitude" label="Latitud" />
        <TextInput source="address.longitude" label="Longitud" />
        <BooleanInput source="temp" label="Temporal" />

        <BooleanInput source="active" label="Activo" />
      </SimpleForm>
    </Edit>
  );
};
export default VaccinationEdit;
