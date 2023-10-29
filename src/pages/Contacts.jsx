import { Contact } from 'components/Contact/Contact'
import { Filter } from 'components/Filter/Filter'
import Form from 'components/Form/Form'
import React from 'react'

const Contacts = () => {
  return (
    <div>
      <Form/>
      <Filter/>
      <Contact/>
    </div>
  )
}

export default Contacts