import React from "react"
import {
  TextInput,
  BooleanInput,
  SimpleForm,
  required,
  minLength,
  maxLength,
  Edit,
  SelectInput,
} from "react-admin"

const validateName = [required(), minLength(0), maxLength(255)]
const ActionEdit = ({ permissions, ...props }) => {
  return (
    <Edit title="Editar nuevo tramite y/o servicio" {...props}>
      <SimpleForm>
        <SelectInput
          source="category"
          label="Categoria"
          choices={[
            { id: "redtape", name: "Tramites" },
            { id: "services", name: "Servicios" },
            { id: "payment", name: "Pagos" },
          ]}
        />
        <TextInput
          source="description"
          label="Descripción"
          validate={validateName}
          fullWidth
        />
        <TextInput
          source="contactInformation.address.streetName"
          label="Calle"
          fullWidth
        />
        <TextInput
          source="contactInformation.address.streetNumber"
          label="Número"
          fullWidth
        />
        <TextInput
          source="contactInformation.address.city"
          label="Ciudad"
          fullWidth
        />
        <TextInput
          source="contactInformation.address.latitude"
          label="latitude"
        />
        <TextInput
          source="contactInformation.address.longitude"
          label="longitude"
        />
        <TextInput
          source="contactInformation.phone.number"
          label="Numero de Télefono"
        />
        <TextInput
          source="contactInformation.phone.mobilePhone"
          label="Numero de Célular"
        />
        <TextInput source="contactInformation.email" label="Email" fullWidth />

        <BooleanInput
          source="service.online"
          label="Servicio en linea"
          fullWidth
        />
        <TextInput source="service.url" label="Servicio Url" fullWidth />
        <BooleanInput
          source="service.facetoface"
          label="Servicio presencial"
          fullWidth
        />
        <BooleanInput
          source="service.facetoface_operative"
          label="Servicio presencial operativo"
          fullWidth
        />
        <TextInput
          source="service.facetoface_businessHours"
          label="Horario de Atención"
          fullWidth
        />
        <BooleanInput source="active" label="Mostrar este servicio" />
      </SimpleForm>
    </Edit>
  )
}
export default ActionEdit
