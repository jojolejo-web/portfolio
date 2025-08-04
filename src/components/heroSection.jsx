import fondHero from '../assets/fondHero.png'
import Btn from '../components/Boutton'
import {H1} from './Heading'


export default function Hero(){
    return (
        <div>
            <img src={fondHero} alt="" className='w-full relative brightness-50'/>
            <div className='container flex flex-col gap-8 absolute top-80 left-30'>
                <div className='flex flex-col gap-6'>
                    <H1>Créez votre site web avec JHN Digital</H1>
                    
                    <div>
                        <p className='text-gray-200 '>Chez JHN Digital, nous transformons vos idées en réalités numériques.  </p>
                        <p className='text-gray-200'>Faites le premier pas vers un site web exceptionnel qui reflète votre vision.</p>
                    </div>
                
                    
                   
                </div>
                <div className='flex items-start gap-4 '>
                    <Btn border='cursor-pointer ' color='text-green-900 bg-white border border-transparent' >Découvrir</Btn>
                    <Btn color='text-green-900' border='border' hover=' cursor-pointer hover:border-transparent hover:bg-white'>Contact</Btn>
                </div>
                
            </div>
        </div>
    )
}