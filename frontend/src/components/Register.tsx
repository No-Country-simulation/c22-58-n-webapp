import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// const baseURL =
//   import.meta.env.MODE === 'development'
//     ? 'http://localhost:3000'
//     : 'el url del deploy';

type Inputs = {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
};

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    //watch,
  } = useForm<Inputs>();

  /*   const password = watch('password'); */

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log('Registered!', data);
    try {
      const response = await axios.post('/api/auth/register', data);
      console.log('respuesta del servidor', response.data);
      navigate('/');
    } catch (error) {
      console.error('error al enviar los datos', error);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Bienvenido a Dishflow!
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-96 flex-col gap-2 rounded-md border p-6"
        >
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="mb-4 h-10 w-80 rounded-md border outline-none"
            id="nombre"
            {...register('firstName', {
              required: 'nombre required',
            })}
          />

          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            className="mb-4 h-10 w-80 rounded-md border outline-none"
            id="apellidos"
            {...register('lastName', {
              required: 'apellidos required',
            })}
          />

          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="mb-4 h-10 w-80 rounded-md border outline-none"
            id="username"
            {...register('userName', {
              required: 'username required',
            })}
          />

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
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message:
                  'Password must contain at least one uppercase letter, one lowercase letter, and one number',
              },
            })}
          />
          {errors.password && (
            <span className="-mt-5 text-sm text-red-500">
              {errors.password.message}
            </span>
          )}

          {/*           <label htmlFor="confirmPassword">Repeat password</label>
          <input
            type="password"
            className={`mb-3 h-10 w-80 rounded-md border outline-none ${errors.confirmPassword && 'border-red-500'}`}
            id="confirmPassword"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) =>
                value === password || 'Password do not match',
            })}
          />
          {errors.confirmPassword && (
            <span className="-mt-5 text-sm text-red-500">
              {errors.confirmPassword.message}
            </span>
          )} */}

          <div className="my-2 grid grid-cols-3">
            <hr />
            <p className="-mt-3 flex h-fit items-center justify-center text-xl text-gray-300">
              o
            </p>
            <hr />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-1 h-10 w-80 rounded-md bg-[#2C2C2C] tracking-wider text-white"
          >
            {isSubmitting ? 'Registrando...' : 'Registrate'}
          </button>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Ya tenes cuenta?
          <Link
            to="/"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            {' '}
            Logeate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
