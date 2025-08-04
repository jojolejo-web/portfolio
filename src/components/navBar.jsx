import Img1 from '../assets/logoj.png'
import Btn from './Boutton'

export default function Nav(){
    return(
        <nav className="flex flex-col px-16 justify-center h-24">
            <div className="flex justify-between items-center gap-8">
                <div className='flex flex-col flex-1'>
                    <div className="flex flex-row gap-10  items-center">
                    <a href="" className="text-white hover:text-green-900" >Accueil</a>
                    <a href="" className="text-white hover:text-green-900">Service</a>
                    <a href="" className="text-white hover:text-green-900">Projet</a>
                </div>

                </div>
                
                 <img 
                 className='h-9' 
                    src={Img1}
                    alt="" 
                /> 
                <div className="w-full flex flex-col items-end justify-end flex-1">
                    <Btn 
                color='text-green-900 bg-white' 
                hover='hover:bg-transparent hover:border cursor-pointer ' 
               
                >
                    Contact
                    </Btn>
                </div>
                
            </div>
        </nav>
        )
}