import React from 'react'

export const SearchBar = () => {
return (
    <div className='w-full flex justify-center'>
        <div className='border-2 border-[#BAE5E6] rounded-lg drop-shadow-2xl  w-[719px] h-[115px] mt-32 pt-5 pb-5 pl-5 pr-5 flex flex-row bg-[#BAE5E6] gap-3'>
            <div className=''>
                <span>Origen</span>
                <input type="text" className='text-center w-[120px] h-[40px] rounded-lg bg-[#188183] text-white mt-4 focus:outline-none focus:border-transparent placeholder-white' placeholder='Mar del Plata'/>
            </div>
            <div className=''>
                <span>Destino</span>
                <input type="text" className='text-center w-[120px] h-[40px] rounded-lg bg-[#188183] text-white mt-4 focus:outline-none focus:border-transparent  placeholder-white' placeholder='Buenos Aires'/>
            </div>
            <div className=''>
                <span>Fecha</span>
                <input type="date" className='text-center w-[120px] h-[40px] rounded-lg bg-[#188183] text-white mt-4 focus:outline-none focus:border-transparent placeholder-white' placeholder='Mar del Plata'/>
            </div>
            <div className=' '>
                <span>Viajeros</span>
                <input type="number" className='text-center w-[140px] h-[40px] rounded-lg bg-[#188183] text-white mt-4  focus:outline-none focus:border-transparent appearance-none placeholder-white' placeholder='2'/>
            </div>

            <button className='w-[80px] h-[72px] bg-[#188183] mt-2 rounded-lg'><svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z" fill="#fff"></path></g></svg></button>
            </div>
    </div>
)
}



