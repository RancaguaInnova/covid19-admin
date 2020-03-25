import React from 'react'
import {
  TextInput,
  SimpleForm,
  SelectInput,
  required,
  minLength,
  maxLength,
  Edit,
  BooleanInput,
} from 'react-admin'

const validateName = [required(), minLength(0), maxLength(5550)]
const ActionEdit = ({ permissions, ...props }) => {
  return (
    <Edit title="Editar Centro de Salud" {...props} undoable={false}>
      <SimpleForm>
        <TextInput
          source="name"
          label="Nombre"
          validate={validateName}
          fullWidth
        />
        <SelectInput
          source="category"
          label="Categoria"
          choices={[
            { id: 'public', name: 'Publico' },
            { id: 'private', name: 'Privado' },
          ]}
        />
        <SelectInput
          source="type"
          label="Tipo de Centro"
          choices={[
            { id: 'hospital', name: 'Hospital' },
            { id: 'clinic', name: 'Clinica' },
            { id: 'cesfam', name: 'Centro de Salud Familiar' },
            { id: 'cecof', name: 'Centro Comunitario de Salud' },
          ]}
        />
        <TextInput
          source="information"
          label="Información del centro"
          fullWidth
        />

        <TextInput source="url" label="Url" />
        <TextInput
          source="businessHours"
          label="Horario de Atención"
          fullWidth
        />
        <TextInput
          source="businessHoursSapu"
          label="Horario de Sapu"
          fullWidth
        />
        <TextInput
          source="pathologies"
          label="Patalogias que esta atendiendo el Centro de Salud"
          fullWidth
        />

        <TextInput source="iconMapUrl" label="Icono Mapa" fullWidth />

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
          source="covid.atention"
          label="Realiza atención a personas por Corona virus"
          fullWidth
        />
        <BooleanInput
          source="covid.examen"
          label="Realiza Examen de Corona virus"
          fullWidth
        />

        <BooleanInput source="active" label="Activo" />
      </SimpleForm>
    </Edit>
  )
}
export default ActionEdit
