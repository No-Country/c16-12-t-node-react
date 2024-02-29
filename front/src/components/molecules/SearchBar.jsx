import React from 'react'
import { Button,Input } from '../atoms/index.js'

const SearchBar = () => {
return (
    <div className='w-full flex justify-center'>
        <div className='border-2 border-[#BAE5E6] rounded-lg drop-shadow-2xl  w-[819px] h-[115px] mt-32 pt-5 pb-5 pl-5 pr-5 flex flex-row bg-[#BAE5E6] gap-3'>
            <div className=''>
                <Input size='minimum' inputs='text' placeHolder='origen' label='origen'/>
            </div>
            <div className=''>
                <Input size='minimum' inputs='text' placeHolder='destino' label='destino'/>
            </div>
            <div className=''>
                <Input inputs="date" size='minimum' placeHolder='fecha' label='fecha'/>
            </div>
            <div className=''>
                <Input inputs="number" size='minimum' placeHolder='viajeros' label='viajeros'/>
            </div>
            <Button size='minimum' content='search' color="primary_normal" />
            </div>
    </div>
)
}

export default SearchBar
