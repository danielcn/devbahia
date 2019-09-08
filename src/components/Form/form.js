import { withFormik, Form, Field } from 'formik'
​
const ContactFormFormik = withFormik({
  mapPropsToValues: () => ({ 
    email: '',
    password: '',
    address: {
      city: { 
        name: '',
      }
    },
    info: ''
  }),
  handleSubmit: values => {
    api.post(values)
  }
})
​
const Form = () => (
  <Form> 
    <Field type="email" name="email" />
    <Field type="password" name="password" />
    <Field name="address.city.name" />
    <Field name="info" />
    <button type="submit" >
      Submit
    </button>
  </Form>
)
​
export default ContactFormFormik(Form)