import React from "react";
import {
  Show,
  TextField,
  SimpleShowLayout,
  BooleanField,
  Labeled
} from "react-admin";

const RolesShow = props => (
  <Show {...props} title="Roles">
    <SimpleShowLayout>
      <TextField source="name" label="Nombre" defaultValue="" />
      <Labeled label="Noticias">
        <BooleanField label="Crear" source="news.create" className="column16" />
        <BooleanField label="Listar" source="news.list" className="column16" />
        <BooleanField label="Editar" source="news.edit" className="column16" />
        <BooleanField label="Mostrar" source="news.show" className="column16" />
        <BooleanField
          label="Eliminar"
          source="news.delete"
          className="column16"
        />
        <BooleanField
          label="Habilitado"
          source="news.enabled"
          className="column16"
        />
      </Labeled>
      <Labeled label="Usuarios">
        <span className="flex">
          <BooleanField
            label="Crear"
            source="users.create"
            className="column16"
          />
          <BooleanField
            label="Listar"
            source="users.list"
            className="column16"
          />
          <BooleanField
            label="Editar"
            source="users.edit"
            className="column16"
          />
          <BooleanField
            label="Mostrar"
            source="users.show"
            className="column16"
          />
          <BooleanField
            label="Eliminar"
            source="users.delete"
            className="column16"
          />
          <BooleanField
            label="Habilitado"
            source="users.enabled"
            className="column16"
          />
        </span>
      </Labeled>
    </SimpleShowLayout>
  </Show>
);
export default RolesShow;
