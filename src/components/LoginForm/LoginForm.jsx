import { Field, Form, Formik } from "formik";

const LoginForm = () => {
  return (
    <Formik>
      <Form>
        <label>
          <p> Email</p>
          <Field type="email" name="email"></Field>
        </label>
        <label>
          <p> Password</p>
          <Field type="password" name="password"></Field>
        </label>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};
export default LoginForm;
