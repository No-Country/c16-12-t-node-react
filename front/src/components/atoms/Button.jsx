import PropTypes from 'prop-types';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export const Button = ({size, content}) => {
    const sizeVariants = {
        small: 'bg-primary-200 hover:bg-primary-300 w-48 h-12',
        medium: 'bg-primary-300 hover:bg-primary-400 w-96 h-12',
        mediumlogin: 'bg-white hover:bg-secondary-100 w-96 h-12 border border-black rounded-md mb-2',
        large: '',
    };
    const contentVariants = {
        login: 'Ingresar',
        register: 'Registrarme',
        viewTravel: 'Ver viaje',
        search: 'Buscar',
        confirmTravel: 'Confirmar viaje',
        logingoogle: <>
                        <FaGoogle style={{ marginRight: '5px' }} />
                        Continuar con Google
                    </>,
        loginfacebook: <>
                        <FaFacebook style={{ marginRight: '5px' }} />
                        Continuar con Facebook
                    </>
    };

    let buttonContent = contentVariants[content];
    let buttonSize = sizeVariants[size];

    return (
        <button type="submit" className={`m-5 text-xl rounded-md flex justify-center items-center ${buttonSize}`}>
            {buttonContent}
        </button>
    );
};

Button.propTypes = {
    content: PropTypes.oneOf(['login', 'register', 'viewTravel', 'submit', 'search', 'confirmTravel', 'logingoogle', 'loginfacebook']),
    size: PropTypes.oneOf(['small', 'medium', 'mediumlogin', 'large']),
};