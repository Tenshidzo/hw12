import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface AuthFormProps {
  onSubmit: (data: AuthFormData) => void;
}

export interface AuthFormData {
  email: string;
  password: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<AuthFormData>();

  const onSubmitHandler: SubmitHandler<AuthFormData> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default AuthForm;
