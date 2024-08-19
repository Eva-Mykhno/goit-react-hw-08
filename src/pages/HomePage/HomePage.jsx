import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Welcome to the Phonebook app!</h2>
      <p className={s.text}>
        Here you can create and save your list of important contacts!
      </p>
      <p className={s.title}>Try it now!</p>
    </div>
  );
};
export default HomePage;
