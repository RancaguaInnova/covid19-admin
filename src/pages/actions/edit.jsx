import React from "react";
import {
  TextInput,
  SimpleForm,
  DateTimeInput,
  required,
  minLength,
  maxLength,
  Edit,
  BooleanInput,
  ImageInput,
  ImageField
} from "react-admin";

const validateName = [required(), minLength(0), maxLength(255)];
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
          label="Descripción de la Recomendación"
          validate={validateName}
          fullWidth
        />
        <ImageInput source="images" label="Imagen " accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
        <BooleanInput source="active" label="Activo" />
        <TextInput source="urlVideo" label="Url Video" type="url" fullWidth />
      </SimpleForm>
    </Edit>
  );
};
export default ActionEdit;
