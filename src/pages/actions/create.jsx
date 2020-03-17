import React from "react";
import {
  TextInput,
  DateTimeInput,
  SimpleForm,
  Create,
  required,
  minLength,
  maxLength,
  BooleanInput
} from "react-admin";

const validateName = [required(), minLength(0), maxLength(5550)];
const validateDate = [required()];
const ActionCreate = ({ classes, ...props }) => {
  return (
    <Create label="Crear" title="Crear Acción" {...props}>
      <SimpleForm>
        <DateTimeInput
          source="date"
          label="Fecha y Hora"
          validate={validateDate}
        />
        <TextInput
          source="description"
          label="Descripción de la acción"
          validate={validateName}
        />
        <BooleanInput source="active" label="Activo" />
      </SimpleForm>
    </Create>
  );
};
export default ActionCreate;
