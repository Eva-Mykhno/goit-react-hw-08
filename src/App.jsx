import s from "./App.module.css";
// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
// import { fetchContacts } from "./redux/contacts/operations";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectError, selectLoading } from "./redux/contacts/selectors";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Layout = lazy(() => import("./components/Layout/Layout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <div className={s.wrapper}>
        <h1 className={s.title}>Phonebook</h1>
        {/* <ContactForm />
        <SearchBox />
        {loading && <h2>Loading...</h2>}
        {error && <h2>Something went wrong!</h2>}
        <ContactList /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
