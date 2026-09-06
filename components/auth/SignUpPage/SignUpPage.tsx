import css from './SignUpPage.module.css';

const SignUpPage = () => {
  return (
    <main className={css.mainContent}>
      <form className={css.form}>
        <h1 className={css.formTitle}>Sign up</h1>

        <label className={css.formGroup}>
          Email
          <input
            type="email"
            name="email"
            className={css.input}
            required
          />
        </label>

        <label className={css.formGroup}>
          Password
          <input
            type="password"
            name="password"
            className={css.input}
            required
          />
        </label>

        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Register
          </button>
        </div>

        <p className={css.error}></p>
      </form>
    </main>
  );
};

export default SignUpPage;
