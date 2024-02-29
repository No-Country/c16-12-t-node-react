//import PropTypes from 'prop-types';
import { Avatar, UserName, StarRating, Button, FromTo, TripTime } from '@/components/atoms/index';
import { FaDog, FaBabyCarriage, FaSmokingBan, FaCalendar} from 'react-icons/fa';

export const TripDetails = () => {
    return (
        <div className='flex flex-col items-center'>
        <article className='w-1200 h-520 bg-white rounded-xl flex justify-between'>
            <aside className='flex flex-col justify-between p-10'>
                <section className='flex'>
                    <aside> 
                        <Avatar size='small'/> 
                    </aside>
                    <div className='flex flex-col p-5 font-bold text-3xl'>
                        <UserName username='Lucas Herrera'/>
                        <StarRating userRating={4}/>
                    </div> 
                </section>   
                <section className='font-bold'>
                    <div className='flex items-center pb-4'>
                        <FaDog className='size-6'/>
                        <span className='pl-2'>Puedo llevar mascotas</span>
                    </div>
                    <div className='flex items-center pb-4'>
                        <FaBabyCarriage className='size-6'/>
                        <span className='pl-2'>No tengo asiento para niños</span>
                    </div>
                    <div className='flex items-center'>
                        <FaSmokingBan className='size-6'/>
                        <span className='pl-2'>No permito fumar en el auto</span>
                    </div>
                </section>
                <section>
                    <h1 className='pb-6 font-bold'>Sobre el viaje</h1>
                    <ul className='list-disc pl-10'>
                        <li>Tengo espacio para valijas</li>
                    </ul>
                </section>
            </aside>
            <aside>
                <section className='p-20 flex flex-col justify-center min-h-full'>
                    <div className='flex items-center pb-10'>
                        <FaCalendar />
                        <span className='p-2'>10/10/2024</span>
                    </div>
                    
                    <div className='pt-4 font-bold'>
                       <FromTo from='Mar del Plata' to='Merlo'/> 
                    </div>
                    <div className='pt-10'>
                        <TripTime time={10}/>
                    </div>
                </section>
            </aside>
        </article>
            <Button size='medium' content='confirmTravel' color='primary_normal'/>
     </div>
    )
};