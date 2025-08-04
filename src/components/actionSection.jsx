import Btn from "./Boutton";
import {H2} from "./Heading";

export default function actionSection(){
    return (
        <div className="px-16 py-36 flex flex-col  items-center">
            <div className="container ">
                <div className="flex flex-row gap-20">
                    <div className="flex flex-col flex-1">
                        <H2 serif={"font-serif"}>Obtenez votre devis gratuit</H2>
                        
                    </div>
                    <div className="flex flex-col items-start gap-8 flex-1">
                        <p className="text-white">Vous envisagez de créer un site web qui reflète votre vision ? 
                            Contactez-nous dès aujourd'hui pour une consultation personnalisée et sans engagement.</p>
                       
                          
                            <Btn border='cursor-pointer ' color='text-green-900 bg-white border border-transparent'>Prendre rendez-vous</Btn>
                       
                    </div>


                </div>
                
                
            </div>
        </div>
    )
} 