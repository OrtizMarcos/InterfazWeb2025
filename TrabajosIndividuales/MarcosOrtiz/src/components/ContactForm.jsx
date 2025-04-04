import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  return (
    <div className="container mt-5">
      <h2>¡Hacenos tu pedido!</h2>
      <Formik
        initialValues={{ nombre: '', email: '', mensaje: '' }}
        validationSchema={Yup.object({
          nombre: Yup.string().required('Requerido'),
          email: Yup.string().email('Email inválido').required('Requerido'),
          mensaje: Yup.string().required('Escribinos algo 😄'),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
          alert('¡Gracias por contactarnos!');
        }}
      >
        <Form className="mt-4">
          <div className="mb-3">
            <label>Nombre</label>
            <Field name="nombre" className="form-control" />
            <ErrorMessage name="nombre" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label>Mensaje</label>
            <Field name="mensaje" as="textarea" className="form-control" />
            <ErrorMessage name="mensaje" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
