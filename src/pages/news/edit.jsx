import React from "react";
import {
  TextInput,
  DateInput,
  SimpleForm,
  BooleanInput,
  Edit,
  ImageInput,
  FileField,
  FileInput,
  ImageField,
  DateTimeInput
} from "react-admin";

const validateNewsEdit = values => {
  const errors = {};
  if (!values.title) {
    errors.title = ["El titulo de la noticia es requerido"];
  }
  if (!values.subtitle) {
    errors.subtitle = ["El sub titulo de la noticia es requerido"];
  }
  if (!values.publicationDate) {
    errors.publicationDate = ["La fecha de publicación es requerida"];
  }
  if (!values.body) {
    errors.body = ["El cuerpo de la noticia es requerido"];
  }
  if (!values.imageUrl) {
    errors.imageUrl = ["La url de la imagen es requerida"];
  }
  return errors;
};
const NewsEdit = props => (
  <Edit {...props} title={"Editando Noticia"} undoable={false}>
    <SimpleForm>
      <DateTimeInput source="date" label="Fecha y Hora" />
      <TextInput source="title" label="Titulo" />
      <TextInput source="subtitle" label="Subtitulo" />
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
  </Edit>
);
export default NewsEdit;
