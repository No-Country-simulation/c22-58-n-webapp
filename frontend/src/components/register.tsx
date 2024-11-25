import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

type Inputs = {
    email: string
    password: string
    confirmPassword: string
}

function Register() {

    const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm<Inputs>()

    const password = watch("password")

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log("Registered!", data)
    }

    return (

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Bienvenido a Dishflow!</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-2 p-6 w-96 border rounded-md">

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className={`border outline-none mb-4 h-10 w-80 rounded-md ${errors.email && "border-red-500"}`} id="email" {...register("email", {
                            required: "Email required",
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: "Invalid email adress"
                            }
                        })}
                    />
                    {errors.email && <span className="text-red-500 text-sm -mt-5">{errors.email.message}</span>}

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className={`border outline-none mb-4 h-10 w-80 rounded-md ${errors.email && "border-red-500"}`}
                        id="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
                            }
                        })}
                    />
                    {errors.password && <span className="text-red-500 text-sm -mt-5">{errors.password.message}</span>}

                    <label htmlFor="confirmPassword">Repeat password</label>
                    <input
                        type="password"
                        className={`border outline-none mb-3 h-10 w-80 rounded-md ${errors.confirmPassword && "border-red-500"}`}
                        id="confirmPassword"
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: value => value === password || "Password do not match"
                        })}
                    />
                    {errors.confirmPassword && <span className="text-red-500 text-sm -mt-5">{errors.confirmPassword.message}</span>}

                    <div className="grid grid-cols-3 my-2">

                        <hr />
                        <p className="flex justify-center items-center text-gray-300 text-xl h-fit -mt-3">o</p>
                        <hr />

                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-1 w-80 h-10 rounded-md bg-[#2C2C2C] text-white tracking-wider">{isSubmitting ? "Registrando..." : "Registrate"}
                    </button>

                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Ya tenes cuenta?
                    <Link to="/" className="font-semibold text-indigo-600 hover:text-indigo-500"> Logeate</Link>
                </p>

            </div>
        </div>

    )
}

export default Register