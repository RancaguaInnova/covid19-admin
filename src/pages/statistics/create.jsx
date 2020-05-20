import React from 'react'
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
  maxLength,
} from 'react-admin'

const validateName = [required(), minLength(0), maxLength(100)]
const validateDescription = [minLength(0), maxLength(140)]

const validateDate = [required()]
const NewsCreate = props => (
  <Create title="Crear Cifras" {...props}>
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
  </Create>
)
export default NewsCreate
