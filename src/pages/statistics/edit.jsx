import React from "react"
import {
  TextInput,
  SimpleForm,
  Edit,
  ImageInput,
  ImageField,
  DateTimeInput,
  required,
} from "react-admin"

const validateDate = [required()]
const NewsEdit = (props) => (
  <Edit {...props} title={"Editando Cifras"}>
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
