import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import s from "./ContactsPage.module.css";
import Loader from "../../components/Loader/Loader";

const ContactsPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={s.wrapper}>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <h2>Something went wrong!</h2>}
      <ContactList />
    </div>
  );
};
export default ContactsPage;
