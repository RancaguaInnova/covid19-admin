import React from 'react'
import {
  Datagrid,
  EditButton,
  List,
  BooleanField,
  TextField,
  DeleteButton,
  DateField,
  SelectField,
} from 'react-admin'
const ActionList = ({ ...props }) => (
  <List {...props} title="Listado  tramites y/o servicios">
    <Datagrid rowClick="edit">
      <SelectField
        source="category"
        label="Categoria"
        choices={[
          { id: 'redtape', name: 'Tramites' },
          { id: 'services', name: 'Servicios' },
          { id: 'payment', name: 'Pagos' },
        ]}
      />
      <TextField source="description" label="Descripción" />
      <BooleanField source="active" label="Activo" />
      <EditButton label="Editar" />
      <DeleteButton label="Eliminar" />
    </Datagrid>
  </List>
)

export default ActionList
