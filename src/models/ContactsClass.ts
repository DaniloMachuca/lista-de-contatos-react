import * as enums from '../util/enums/Contacts'

class ContactsClass {
  id: number
  name: string
  email: string
  phone: string
  classification: enums.Classification

  constructor(
    id: number,
    name: string,
    email: string,
    phone: string,
    classification: enums.Classification
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.phone = phone
    this.classification = classification
  }
}

export default ContactsClass
