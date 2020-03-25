import React from 'react'
import {
  TextField,
  DateField,
  Show,
  SimpleShowLayout,
  BooleanField,
  SelectField,
} from 'react-admin'

const ActionShow = props => (
  <Show {...props} title="Tramites y/o servicios" className="w100">
    <SimpleShowLayout>
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
    </SimpleShowLayout>
  </Show>
)
export default ActionShow
