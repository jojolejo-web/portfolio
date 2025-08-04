import Img1 from "../assets/logoj.png";

export default function Footer() {
  return (
    <div className="flex flex-col items-center  px-16 py-20">
      <div className="container flex flex-col gap-20 ">
        <div className="flex flex-col gap-8 items-center">
          <img className="h-9" src={Img1} alt="" />
          <div className="flex gap-8">
                <a href="" className="text-white hover:text-green-900">Contactez Nous</a>
                <a href="" className="text-white hover:text-green-900">Nos service</a>
                <a href="" className="text-white hover:text-green-900">A propos</a>
          </div>
        </div>
        <div className="flex flex-col gap-8">
            <hr className="text-white"/>
            <div className="flex justify-between">
                <p className="text-white">© 2025 JHN Digital. Tous droits réservés.</p>
                <div className="flex gap-6">
                    <a href="" className="text-white underline">Politique de Confidentialité</a>
                    <a href="" className="text-white underline">Conditions de Service</a>
                    <a href="" className="text-white underline">Paramètre Cookies</a>
                </div>
            </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
