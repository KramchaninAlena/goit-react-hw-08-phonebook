import { Container } from '@mui/material'
import { Contact } from 'components/Contact/Contact'
import { Filter } from 'components/Filter/Filter'
import Form from 'components/Form/Form'
import React from 'react'

const Contacts = () => {
  return (
    <div>
      <Container maxWidth="sm" sx={{ bgcolor: '#F8F1FF' }}>
      <Form/>
      <Filter/>
      <Contact/>
      </Container>
    </div>
  )
}

export default Contacts