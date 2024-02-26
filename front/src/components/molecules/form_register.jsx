//import PropTypes from 'prop-Type';
import { Button } from "../atoms/Button";
import { Input } from '../atoms/Input';

export const RegisterForm = () =>{

    return (
        <form action="" className="h-810 w-542 bg-white rounded-xl mt-10">
            <span className="flex justify-center p-5 font-bold">Completa el formulario con tus datos personales</span>
            <section className="flex flex-col justify-center  min-w-full p-10">
                <Input size='medium' inputs='text' placeHolder='nombre' label='nombre' className='p-10'/>
                <Input size='large' inputs='text' placeHolder='apellido' label='apellido' className='p-5'/>
                <Input size='medium' inputs='email' placeHolder='email' label='email'/>
                <Input size='medium' inputs='password' label='contraseña'/>
                <Input size='medium' inputs='number' label='telefono'/>
                <Input size='medium' inputs='number' label='documento'/>
            </section>
            <section className="flex justify-center items-center min-w-full required:">
               <input type="checkbox" className=" checked:bg-blue-500" />
                <span className="flex justify-center p-5 font-bold">
                    He leído y acepto los términos y servicios.
                </span>  
            </section>
           
            <span className="flex justify-center"><Button size='medium' content='register'/></span>
            
        </form>
    );
}

RegisterForm.propTypes = {

}