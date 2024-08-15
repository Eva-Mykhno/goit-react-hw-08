import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          <p>Name</p>
          <Field type="text" name="name" placeholder="Enter yuor name"></Field>
        </label>
        <label>
          <p>Email</p>
          <Field
            type="email"
            name="email"
            placeholder="Enter yuor email"></Field>
        </label>
        <label>
          <p>Password</p>
          <Field
            type="password"
            name="password"
            placeholder="Enter yuor password"></Field>
        </label>
        <button type="submit">Register</button>

        <p>
          You already have an account? <Link to="/login">Sign in</Link>
        </p>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
