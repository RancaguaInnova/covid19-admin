import React from "react";
import {
  TextInput,
  SimpleForm,
  Create,
  BooleanInput,
  Labeled
} from "react-admin";

const RolesCreate = props => {
  return (
    <Create title="Crear Rol" {...props}>
      <SimpleForm>
        <TextInput source="name" label="Nombre" defaultValue="" />

        <Labeled label="Noticias">
          <span className="flex">
            <BooleanInput
              label="Crear"
              source="news.create"
              className="column16"
              defaultValue={false}
            />
            <BooleanInput
              label="Listar"
              source="news.list"
              className="column16"
              defaultValue={false}
            />
            <BooleanInput
              label="Editar"
              source="news.edit"
              className="column16"
              defaultValue={false}
            />
            <BooleanInput
              label="Mostrar"
              source="news.show"
              className="column16"
              defaultValue={false}
            />
            <BooleanInput
              label="Eliminar"
              source="news.delete"
              className="column16"
              defaultValue={false}
            />
            <BooleanInput
              label="Habilitado"
              source="news.enabled"
              className="column16"
              defaultValue={false}
            />
          </span>
        </Labeled>
        <Labeled label="Acciones">
          <span className="flex">
            <BooleanInput
              label="Crear"
              source="actions.create"
              className="column16"
              defaultValue={false}
            />
            <BooleanInput
              label="Listar"
              source="actions.list"
              className="column16"
              defaultValue={false}
            />
            <BooleanInput
              label="Editar"
              source="actions.edit"
              className="column16"
              defaultValue={false}
            />
            <BooleanInput
              label="Mostrar"
              source="actions.show"
              className="column16"
              defaultValue={false}
            />
            <BooleanInput
              label="Eliminar"
              source="actions.delete"
              className="column16"
              defaultValue={false}
            />
            <BooleanInput
              label="Habilitado"
              source="actions.enabled"
              className="column16"
              defaultValue={false}
            />
          </span>
        </Labeled>
        <Labeled label="Usuarios">
          <span className="flex">
            <BooleanInput
              label="Crear"
              source="users.create"
              className="column16"
            />
            <BooleanInput
              label="Listar"
              source="users.list"
              className="column16"
            />
            <BooleanInput
              label="Editar"
              source="users.edit"
              className="column16"
            />
            <BooleanInput
              label="Mostrar"
              source="users.show"
              className="column16"
            />
            <BooleanInput
              label="Eliminar"
              source="users.delete"
              className="column16"
            />
            <BooleanInput
              label="Habilitado"
              source="users.enabled"
              className="column16"
            />
          </span>
        </Labeled>
        <Labeled label="Roles">
          <span className="flex">
            <BooleanInput
              label="Crear"
              source="roles.create"
              className="column16"
              defaultValue={false}
            />
            <BooleanInput
              label="Listar"
              source="roles.list"
              className="column16"
              defaultValue={false}
            />
            <BooleanInput
              label="Editar"
              source="roles.edit"
              className="column16"
              defaultValue={false}
            />
            <BooleanInput
              label="Mostrar"
              source="roles.show"
              className="column16"
              defaultValue={false}
            />
            <BooleanInput
              label="Eliminar"
              source="roles.delete"
              className="column16"
              defaultValue={false}
            />
            <BooleanInput
              label="Habilitado"
              source="roles.enabled"
              className="column16"
              defaultValue={false}
            />
          </span>
        </Labeled>
      </SimpleForm>
    </Create>
  );
};
export default RolesCreate;
