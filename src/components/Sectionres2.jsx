import Btn from "./Boutton";
import { H5 } from "./Heading";
import { Aperture, PanelsTopLeft } from "lucide-react";
import support from "../assets/IT-Support.png"

export default function SectionRes2() {
  return (
    <div className="flex flex-col px-16 py-28 items-center">
      <div className="container">
        <div className="flex gap-20">
          <div className="flex flex-col items-start flex-1  gap-16">
            <div className="flex  gap-6">
              <PanelsTopLeft className="text-white" size={48} />
              <div className="flex flex-col gap-4">
                <H5 >Comment ça marche</H5>

                <p className="text-white">
                  Découvrez notre processus simple pour créer des sites web qui
                  répondent à vos besoins.
                </p>
              </div>
            </div>
            <div className="flex  gap-6">
              <PanelsTopLeft className="text-white" size={48} />
              <div className="flex flex-col gap-4">
                <H5>Étape par étape</H5>

                <p className="text-white">
                  Nous travaillons avec vous pour concevoir, développer et lancer votre site web.
                </p>
              </div>
            </div>
            <div className="flex  gap-6">
              <Aperture className="text-white" size={48} />
              <div className="flex flex-col gap-4">
                <H5>Support continu</H5>

                <p className="text-white">
                  Bénéficiez d'un accompagnement permanent pour optimiser votre site et garantir son succès.
                </p>
              </div>
            </div>
            
            <Btn color='bg-white' hover='cursor-pointer'>En savoir plus</Btn>
          </div>

          <div className="flex-1 flex items-center justify-center ">
            <img alt="ca marche pas" src={support} style={{ height: "40rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
