import React from "react";
import {
  TextInput,
  DateTimeInput,
  SimpleForm,
  Create,
  required,
  minLength,
  maxLength,
  BooleanInput,
  ImageInput,
  ImageField
} from "react-admin";

const validateName = [required(), minLength(0), maxLength(5550)];
const validateDate = [required()];
const ActionCreate = ({ classes, ...props }) => {
  return (
    <Create label="Crear" title="Crear Recomendación" {...props}>
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
        <ImageInput source="images" label="Imagenes" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="urlVideo" label="Url Video" type="url" fullWidth />

        <BooleanInput source="active" label="Activo" />
      </SimpleForm>
    </Create>
  );
};
export default ActionCreate;
