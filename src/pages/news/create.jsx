import React from "react";
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
  maxLength
} from "react-admin";

const validateName = [required(), minLength(0), maxLength(155)];
const validateDescription = [minLength(0), maxLength(500)];

const validateDate = [required()];
const NewsCreate = props => (
  <Create title="Crear Noticias" {...props} undoable={false}>
    <SimpleForm>
      <DateTimeInput
        source="date"
        label="Fecha y Hora"
        validate={validateDate}
      />
      <TextInput
        source="title"
        label="Título"
        validate={validateName}
        fullWidth
      />
      {/*       <TextInput source="subtitle" label="Subtítulo" />
       */}
      <TextInput
        source="description"
        label="Descripción"
        fullWidth
        validate={validateDescription}
      />
      <TextInput source="urlExterna" label="Url" type="url" fullWidth />
      {/*   <ImageInput source="images" label="Imagenes" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <FileInput
        source="documents"
        label="Documentos"
        accept="application/pdf"
        multiple
      >
        <FileField source="src" title="title" />
      </FileInput> */}
      <BooleanInput source="active" label="Activo" />
    </SimpleForm>
  </Create>
);
export default NewsCreate;
