import { useForm } from '../hooks/useForm';

export const Forms = () => {
  const { email, password, form, onChange } = useForm({
    email: 'test@test.com',
    password: '123456',
  });

  return (
    <>
      <h3>Forms</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => onChange(e.target.value, 'email')}
      />

      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={password}
        onChange={(e) => onChange(e.target.value, 'password')}
      />

      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  );
};
