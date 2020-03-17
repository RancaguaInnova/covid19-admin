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
  SelectInput
} from "react-admin";

const validateName = [required(), minLength(0), maxLength(5550)];
const ActionCreate = ({ classes, ...props }) => {
  return (
    <Create
      label="Crear"
      title="Crear Centro de Salud"
      {...props}
      undoable={false}
    >
      <SimpleForm>
        <TextInput source="name" label="Nombre" validate={validateName} />
        <SelectInput
          source="category"
          label="Categoria"
          choices={[
            { id: "public", name: "Publico" },
            { id: "private", name: "Privado" }
          ]}
        />
        <SelectInput
          source="type"
          label="Tipo de Centro"
          choices={[
            { id: "hospital", name: "Hospital" },
            { id: "clinic", name: "Clinica" },
            { id: "cesfam", name: "Centro de Salud Familiar" },
            { id: "cecof", name: "Centro Comunitario de Salud" }
          ]}
        />
        <TextInput source="information" label="Información del centro" />

        <TextInput source="url" label="Url" />
        <TextInput source="businessHours" label="Horario de Atención" />
        <TextInput source="businessHoursSapu" label="Horario de Sapu" />

        <TextInput source="iconMapUrl" label="Icono Mapa" />

        <TextInput
          source="contactInformation.address.streetName"
          label="Calle"
        />
        <TextInput
          source="contactInformation.address.streetNumber"
          label="Número"
        />
        <TextInput source="contactInformation.address.city" label="Ciudad" />
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
        <TextInput source="contactInformation.email" label="Email" />
        <BooleanInput source="active" label="Activo" />
      </SimpleForm>
    </Create>
  );
};
export default ActionCreate;
