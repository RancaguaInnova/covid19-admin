import React from "react";
import {
  Datagrid,
  EditButton,
  List,
  BooleanField,
  TextField,
  DeleteButton,
  SelectField
} from "react-admin";

const ActionList = ({ ...props }) => (
  <List {...props} title="Listado de Centros de Salud">
    <Datagrid rowClick="edit">
      <TextField source="name" label="Titulo" />
      <SelectField
        source="category"
        label="Categoria"
        choices={[
          { id: "public", name: "Publico" },
          { id: "private", name: "Privado" }
        ]}
      />
      <SelectField
        source="type"
        label="Tipo de Centro"
        choices={[
          { id: "hospital", name: "Hospital" },
          { id: "clinic", name: "Clinica" },
          { id: "cesfam", name: "Centro de Salud Familiar" },
          { id: "cecof", name: "Centro Comunitario de Salud" }
        ]}
      />

      <BooleanField source="active" label="Activo" />
      <EditButton label="Editar" />
      <DeleteButton label="Eliminar" />
    </Datagrid>
  </List>
);

export default ActionList;
