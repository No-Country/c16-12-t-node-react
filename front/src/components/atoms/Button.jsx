import PropTypes from 'prop-types'

export const Button = ({size, content}) => {
    const sizeVariants = {
        small: 'bg-primary-200 w-48 h-12',
        medium: 'bg-primary-500 w-96 h-12',
        large: '',
    }
    const contentVariants = {
        login: 'Ingresar',
        register: 'Registrarme',
        viewTravel: 'Ver viaje',
        search: 'Buscar',
        confirmTravel: 'Confirmar viaje'

    }
    
    let buttonContent = contentVariants[content]
    let buttonSize = sizeVariants[size]

    return (
        <button type="submit" className={`m-5 font-inter text-xl rounded-md flex justify-center items-center ${buttonSize}`}>
        {buttonContent}
        </button>
    );
};


  

Button.propTypes = {
    content: PropTypes.oneOf(['login', 'register', 'viewTravel', 'submit', 'search', 'confirmTravel']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }