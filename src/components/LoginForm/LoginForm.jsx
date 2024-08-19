import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    options.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label className={s.label}>
          <p> Email</p>
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            className={s.input}></Field>
        </label>
        <label className={s.label}>
          <p> Password</p>
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            className={s.input}></Field>
        </label>
        <button type="submit" className={s.button}>
          Log in
        </button>

        <p className={s.text}>
          Don`t you have an account? <Link to="/register">Sign in</Link>
        </p>
      </Form>
    </Formik>
  );
};
export default LoginForm;
