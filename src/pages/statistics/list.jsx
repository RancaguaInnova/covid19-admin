import React from "react"
import {
  List,
  Datagrid,
  EditButton,
  DeleteButton,
  DateField,
} from "react-admin"

const NewsList = (props) => (
  <List {...props} title="Listado de Cifras">
    <Datagrid rowClick="edit">
      <DateField source="date" label="Fecha" showTime />
      <EditButton label="Editar" />
      <DeleteButton label="Eliminar" />
    </Datagrid>
  </List>
)
export default NewsList
