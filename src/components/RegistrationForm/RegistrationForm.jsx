import { Field, Form, Formik } from "formik";

const RegistrationForm = () => {
  return (
    <Formik>
      <Form>
        <label>
          <p>Name</p>
          <Field type="text" name="name"></Field>
        </label>
        <label>
          <p>Email</p>
          <Field type="email" name="email"></Field>
        </label>
        <label>
          <p>Password</p>
          <Field type="password" name="password"></Field>
        </label>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
