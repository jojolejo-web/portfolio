import {  MapPin, Mail, Phone } from "lucide-react";
import Btn from "./Boutton";
import {H2, H6} from "./Heading";
import Formulaire from "./formulaire";


export default function Contact(){
    return (
        <div className="px-16 py-36 flex flex-col  items-center">
            <div className="container flex flex-col gap-12">
                <div className="flex flex-col gap-4"> 
                    <H2>Contactez-nous</H2>
                    
                    <p className="text-white">Nous sommes là pour répondre à vos questions.</p>
                </div>
                <div className="flex gap-20">
                    <Formulaire></Formulaire>
                    <div className="flex flex-col flex-1 gap-10">
                        <div className="flex gap-6 flex-1 ">
                            <div className="flex flex-col gap-4 flex-1">
                                <Mail className="text-white" size={32}/>
                                <div className="flex flex-col gap-2">
                                    <H6>Email</H6>
                                    
                                    <p className="text-white">philppe65800@gmail.com</p>
                                    
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 flex-1">
                                <Phone className="text-white" size={32}/>
                                <div className="flex flex-col gap-2">
                                    <H6>Téléphone</H6>
                                  
                                    <p className="text-white">Appelez-moi au numéro</p>
                                    <p className="text-white">+33 06 65 44 57 18</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 flex-1">
                                <MapPin className="text-white" size={32}/>
                                <div className="flex flex-col gap-2">
                                    <H6>Bureau</H6>
                                    
                                    <p className="text-white">16 rue de la libération</p>
                                    
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    )
}