//import PropTypes from 'prop-Type';
import { Button, Input } from "../atoms/index";


export const RegisterForm = () =>{

    return (
        <form action="" className="h-810 w-542 bg-white rounded-xl mt-10">
            <span className="flex justify-center p-5 font-bold text-xl">Completa el formulario con tus datos personales</span>
            <section className="flex flex-col justify-center  min-w-full p-8">
                <Input size='large' inputs='text' placeHolder='nombre' label='nombre' className='min-w-full'/>
                <Input size='large' inputs='text' placeHolder='apellido' label='apellido' className='p-5'/>
                <Input size='large' inputs='email' placeHolder='email' label='email'/>
                <Input size='large' inputs='password' label='contraseña'/>
                <span className="ml-2 pb-2 font-bold">* Tu contraseña debe tener 5 dígitos e incluir un número.</span>
                <Input size='large' inputs='number' label='telefono'/>
                <Input size='large' inputs='number' label='documento'/>
            </section>
            <section className="flex justify-center items-center min-w-full required:">
               <input type="checkbox" className=" checked:bg-blue-500" />
                <span className="flex justify-center p-1 font-bold">
                    He leído y acepto los términos y servicios.
                </span>  
            </section>
           
            <span className="flex justify-center"><Button size='medium' content='register' color="primary_normal"/></span>
            
        </form>
    );
}

RegisterForm.propTypes = {

}