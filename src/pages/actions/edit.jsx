import React from "react";
import {
  TextInput,
  SimpleForm,
  DateTimeInput,
  required,
  minLength,
  maxLength,
  Edit,
  BooleanInput
} from "react-admin";

const validateName = [required(), minLength(0), maxLength(5550)];
const validateDate = [required()];
const ActionEdit = ({ permissions, ...props }) => {
  return (
    <Edit title="Editar acción" {...props}>
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
    </Edit>
  );
};
export default ActionEdit;
