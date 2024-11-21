import { useForm, SubmitHandler } from "react-hook-form";

function LoginDashboard() {

    type Inputs = {
        email: string
        password: string
        confirmPassword: string
    }

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log("Logged", data)
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
                        className={`border outline-none mb-4 h-10 w-80 rounded-md ${errors.email && "border-red-500"}`}
                        id="email"
                        {...register("email", {
                            required: "Email required",
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: "Invalid email adress"
                            }
                        })} />
                    {errors.email && <span className="text-red-500 text-sm -mt-5">{errors.email.message}</span>}

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className={`border outline-none mb-4 h-10 w-80 rounded-md ${errors.email && "border-red-500"}`}
                        id="password"
                        {...register("password", {
                            required: "Required password",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            },
                        })}
                    />
                    {errors.password && <span className="text-red-500 text-sm -mt-5">{errors.password.message}</span>}

                    <button type="submit" className="w-80 h-10 rounded-md bg-black text-white" disabled={isSubmitting}>{isSubmitting ? "Logging..." : "Login"}</button>

                    <span className="mt-6 border-b-2 border-black w-fit">Forgot password?</span>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    No tenes tu cuenta?
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500"> Registrate</a>
                </p>
            </div>
        </div>
    )
}

export default LoginDashboard