import error_404 from '../assets/error-404.png';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/seleccion');

    };
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
            <div className="text-center">
                <img src={error_404}
                     alt=""
                     className="w-full flex justify-center items-center md:w-96"
                />
                <h1 className='text-xl font-bold pt-4 pb-4 md:text-2xl xl:text-4xl'>¡Oops! Página no encontrada</h1>
                <p className='text-md font-semibold px-3 pb-3 md:text-lg xl:text-2xl'>
                    Lo sentimos, la página que estás buscando no existe.
                </p>
                <button 
                    className='border-solid border-2 border-sky-600 rounded-lg p-3 text-white text-lg font-semibold bg-sky-700 hover:bg-sky-500 hover:scale-110 cursor-pointer md:mt-3 lg:text-xl'
                    onClick={handleRedirect}
                >
                        Regresar al inicio
                </button>
            </div>
        </div>
    )
};

export default Error404;