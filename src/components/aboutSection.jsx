import { PanelsTopLeft } from "lucide-react";
import {H3, H5} from "./Heading";


export default function aboutSection() {
  return (
    <div className="px-16 py-36 flex flex-col  items-center">
      <div className="container flex flex-col gap-20">
        <div className="flex flex-col gap-3">
          <H3 serif="font-serif">Découvrez notre processus de</H3>
          <H3 serif="font-serif">création de sites web en trois étapes simples.</H3>
          
        </div>
        <div >
          <div className="flex flex-row gap-12">
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <PanelsTopLeft className="text-white" size={48} />
                <H5>Une approche claire pour concevoir votre site web idéal.</H5>
                
                <p className="text-white">
                  Nous commençons par une consultation approfondie pour
                  comprendre vos besoins.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <PanelsTopLeft className="text-white" size={48} />
                <H5> Conception créative pour un site web qui vous ressemble.</H5>
                
                <p className="text-white">
                  Nos designers élaborent une maquette qui reflète votre vision.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                <PanelsTopLeft className="text-white" size={48} />
                <H5> Développement technique pour un site web performant et sécurisé.</H5>
               
                <p className="text-white">
                  Nous développons votre site avec les dernières technologies pour une expérience optimale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
