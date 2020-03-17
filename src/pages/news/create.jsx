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
  DateTimeInput
} from "react-admin";

const NewsCreate = props => (
  <Create title="Crear Noticias" {...props} undoable={false}>
    <SimpleForm>
      <DateTimeInput source="date" label="Fecha y Hora" />
      <TextInput source="title" label="Título" />
      <TextInput source="subtitle" label="Subtítulo" />
      <TextInput source="description" label="Descripción" />
      <TextInput source="urlExterna" label="Url" type="url" />

      <ImageInput source="images" label="Imagenes" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <FileInput
        source="documents"
        label="Documentos"
        accept="application/pdf"
        multiple
      >
        <FileField source="src" title="title" />
      </FileInput>
      <BooleanInput source="active" label="Activo" />
    </SimpleForm>
  </Create>
);
export default NewsCreate;
