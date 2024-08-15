import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const LoginForm = () => {
  // переадресация при логинизации
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    options.resetForm();
  };

  // переадресация при залогинении
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  //
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          <p> Email</p>
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"></Field>
        </label>
        <label>
          <p> Password</p>
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"></Field>
        </label>
        <button type="submit">Log in</button>

        <p>
          Don`t you have an account? <Link to="/register">Sign in</Link>
        </p>
      </Form>
    </Formik>
  );
};
export default LoginForm;
