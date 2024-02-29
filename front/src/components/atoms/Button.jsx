import PropTypes from 'prop-types';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

// You need to pass on props this arguments for pick size and content for button!
export const Button = ({size, content, color}) => {
    // Differents sizes for the buttons.
    const sizeVariants = {
        small: 'bg-primary-200 hover:bg-primary-300 w-48 h-12',
        medium: 'bg-primary-300 hover:bg-primary-400 w-96 h-12',
        mediumlogin: 'bg-white hover:bg-secondary-100 w-96 h-12 border border-black rounded-md mb-2',
        large: '',
    };
    // Differents content for the buttons.
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
    // Differents colors for the buttons.
    const colorVariants = {
        primary_normal: 'bg-primary-400 hover:bg-primary-1000'
    }
        
    let buttonContent = contentVariants[content]
    let buttonSize = sizeVariants[size]
    let buttonColor = colorVariants[color]
    
    return (
        <button type="submit" className={`m-5 text-xl rounded-md flex justify-center items-center text-white ${buttonColor} ${buttonSize}`}>
        {buttonContent}
        </button>
    );
};

Button.propTypes = {
    content: PropTypes.oneOf(['login', 'register', 'viewTravel', 'submit', 'search', 'confirmTravel', 'logingoogle', 'loginfacebook']),
    size: PropTypes.oneOf(['small', 'medium', 'mediumlogin', 'large']),
    color: PropTypes.oneOf(['primary_normal'])
};
    
