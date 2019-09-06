import { withFormik, Form, Field } from 'formik'
​
const MyFormWithFormik = withFormik({
  mapPropsToValues: () => ({ 
    email: '',
    password: '',
    address: {
      /* outros campos */ 
      city: { 
        name: '',
        /* outros campos */
      }
    }
  }),
  handleSubmit: values => {
    /**
     * o values seria todos os valores do mapeados no  mapValuesToProps,
     * o segundo parametro são os métodos do formik, muito úteis
     * Antes de rodar o handleSubmit, o formik já roda o método de
     * validação dos dados, que posso escrever um novo artigo sobre
    **/
    api.post(values)
  }
})
​
const Form = () => (
  <Form> 
    <Field type="email" name="email" />
    <Field type="password" name="password" />
    <Field name="address.city.name" />
    <button type="submit" >
      Submit
    </button>
  </Form>
)
​
export default MyFormWithFormik(Form)