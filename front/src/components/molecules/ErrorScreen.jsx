import React from 'react'
import { Button } from '../atoms/Button'

const ErrorScreen = () => {
  return (
    <div>
      <div className='flex flex-col items-center mt-5'>
        <img src="../src/assets/img/404Error-cuate1.png" alt="" />
        <span className='font-bold text-center text-2xl'>Ups! <br/>
        Aún no hay viajes disponibles para esta fecha</span>
        <span className='text-center text-lg mt-7'>Puedes seleccionar una fecha diferente <br/>
        ó crear un alerta para que te avisemos si algún conductor viaja al <br/>
        destino que necesitas ir.</span>
        <Button size='mediumNewSearch' content='newSearch' color="primary_normal"/>
        <Button size='mediumAlert' content='alert' color="primary_normal"/>
      </div>
    </div>
  )
}

export default ErrorScreen
