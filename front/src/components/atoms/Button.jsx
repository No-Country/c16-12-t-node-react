import PropTypes from 'prop-types'

// You need to pass on props this arguments for pick size and content for button!
export const Button = ({size, content, color}) => {
    // Differents sizes for the buttons.
    const sizeVariants = {
        small: 'w-48 h-12',
        medium: 'w-96 h-12',
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
    // Differents colors for the buttons.
    const colorVariants = {
        primary_normal: 'bg-primary-400 hover:bg-primary-1000'
    }
    
    let buttonContent = contentVariants[content]
    let buttonSize = sizeVariants[size]
    let buttonColor = colorVariants[color]
    return (
        <button type="submit" className={`m-5 text-xl rounded-md flex justify-center items-center ${buttonColor} ${buttonSize}`}>
        {buttonContent}
        </button>
    );
};

Button.propTypes = {
    content: PropTypes.oneOf(['login', 'register', 'viewTravel', 'submit', 'search', 'confirmTravel']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOf(['primary_normal'])
  }