import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseURL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:3000'
    : 'el url del deploy';

function Login() {
  type Inputs = {
    email: string;
    password: string;
    confirmPassword: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log('Logged', data);
    try {
      const response = await axios.post(baseURL + '/api/auth/login', data);
      console.log('respuesta del servidor', response.data);
      document.cookie = `token=${response.data.token};SameSite=Lax;path=/`;
      console.log(document.cookie);
    } catch (error) {
      console.error('error al enviar los datos', error);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Bienvenido a Dishflow!
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-96 flex-col gap-2 rounded-md border p-6"
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={`mb-4 h-10 w-80 rounded-md border outline-none ${errors.email && 'border-red-500'}`}
            id="email"
            {...register('email', {
              required: 'Email required',
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Invalid email adress',
              },
            })}
          />
          {errors.email && (
            <span className="-mt-5 text-sm text-red-500">
              {errors.email.message}
            </span>
          )}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={`mb-4 h-10 w-80 rounded-md border outline-none ${errors.email && 'border-red-500'}`}
            id="password"
            {...register('password', {
              required: 'Required password',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          {errors.password && (
            <span className="-mt-5 text-sm text-red-500">
              {errors.password.message}
            </span>
          )}

          <button
            type="submit"
            className="h-10 w-80 rounded-md bg-[#2C2C2C] text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging...' : 'Login'}
          </button>

          <span className="mt-6 w-fit border-b-2 border-black">
            Forgot password?
          </span>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          No tenes tu cuenta?
          <Link
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            {' '}
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
