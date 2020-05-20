import React from 'react'
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
  DateTimeInput,
  required,
  minLength,
  maxLength,
} from 'react-admin'
const validateName = [required(), minLength(0), maxLength(100)]
const validateDescription = [minLength(0), maxLength(140)]

const validateDate = [required()]
const NewsEdit = props => (
  <Edit {...props} title={'Editando Cifras'}>
    <SimpleForm>
    <DateTimeInput
        source="date"
        label="Fecha y Hora"
        validate={validateDate}
      />
      <ImageInput source="covidMap" label="Mapa Covid" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <ImageInput source="covidGraph" label="Gráfico Covid" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
     

    </SimpleForm>
  </Edit>
)
export default NewsEdit
