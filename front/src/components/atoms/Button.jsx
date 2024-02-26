import PropTypes from 'prop-types'

// You need to pass on props this arguments for pick size and content for button!
export const Button = ({size, content}) => {
    // Differents sizes for the buttons.
    const sizeVariants = {
        small: 'bg-primary-200 hover:bg-primary-300 w-48 h-12',
        medium: 'bg-primary-300 hover:bg-primary-400 w-96 h-12',
        large: '',
    }
    // Differents contentss for the buttons.
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
        <button type="submit" className={`m-5 text-xl rounded-md flex justify-center items-center ${buttonSize}`}>
        {buttonContent}
        </button>
    );
};

Button.propTypes = {
    content: PropTypes.oneOf(['login', 'register', 'viewTravel', 'submit', 'search', 'confirmTravel']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }