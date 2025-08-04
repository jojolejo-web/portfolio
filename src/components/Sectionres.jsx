import img3 from '../assets/Station Saint Christophe.png'
import Btn from './Boutton'
import { H2, H6 } from './Heading'


export default function SectionRes(){
    return (
        <div className="flex flex-col px-16 py-28 items-center">
            <div className="container flex flex-row gap-20 items-center">
                <div className='flex-1 flex items-center justify-center'>
                    <img src={img3} alt=""  style={{height: "40rem"}}  />
                </div>
                
                <div className='flex flex-col gap-8 flex-1 items-start'>
                    <div className='flex flex-col gap-32'>
                        <div className='flex flex-col gap-6'>
                            <H2>Design personnalisé et responsive pour tous</H2>
                            <p className='text-white'>Chez JHN Digital, nous offrons des designs sur mesure qui s'adaptent à tous les appareils. Votre site web sera à la fois esthétique et fonctionnel.</p>
                        </div>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-4'>
                                <H6>Adaptabilité optimale</H6>
                                <p className='text-white'>Profitez d'une expérience utilisateur exceptionnelle sur tous les écrans.</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <H6>Créativité sans limites</H6>
                                <p className='text-white'>Transformez votre vision en un site web captivant et performant.</p>
                            </div>

                        </div>

                    </div>
                    <Btn color='bg-white' hover='cursor-pointer'>En savoir plus</Btn>

                </div>
            </div>

        </div>
    )
}