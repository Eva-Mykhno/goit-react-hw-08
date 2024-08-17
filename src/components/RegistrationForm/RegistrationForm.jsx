import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

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
      <Form className={s.form}>
        <label className={s.label}>
          <p className={s.title}>Name</p>
          <Field
            type="text"
            name="name"
            placeholder="Enter your name"
            className={s.input}></Field>
        </label>
        <label className={s.label}>
          <p>Email</p>
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            className={s.input}></Field>
        </label>
        <label className={s.label}>
          <p>Password</p>
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            className={s.input}></Field>
        </label>
        <button type="submit" className={s.button}>
          Register
        </button>

        <p className={s.text}>
          You already have an account? <Link to="/login">Sign in</Link>
        </p>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
