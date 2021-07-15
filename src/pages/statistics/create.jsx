import React from "react"
import {
  TextInput,
  SimpleForm,
  Create,
  ImageInput,
  ImageField,
  DateTimeInput,
  required,
} from "react-admin"

const validateDate = [required()]
const NewsCreate = (props) => (
  <Create title="Crear Cifras" {...props}>
    <SimpleForm>
      <DateTimeInput
        source="date"
        label="Fecha y Hora"
        validate={validateDate}
      />
      <TextInput
        source="urlVideo"
        label="Url video"
        type="url"
        resettable={true}
        fullWidth
      />
      <ImageInput
        source="covidMap"
        label="Mapa Covid"
        accept="image/*"
        resettable={true}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
      <ImageInput
        source="covidGraph"
        label="Gráfico Covid"
        accept="image/*"
        resettable={true}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
)
export default NewsCreate
