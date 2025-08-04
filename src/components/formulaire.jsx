import { useState } from "react";
import Btn from "./Boutton";

export default function Formulaire() {

const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const nom = formdata.get("nom");
        const email = formdata.get("email");
        const text = formdata.get("text");
        const condition = formdata.get("condition") === "on";




        if(!condition){
            alert("Vous devez accepter les condition");
            return;
        }

        setLoading(true);

        try{
            const response = await fetch("https://formspree.io/f/xzzvalnv", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({nom, email, text}),

            });
            if (!response.ok) throw new Error("Erreur lors de l'envoi");

            alert("Message envoyé avec succès !");
        }catch (error) {
            console.log(error);
            alert(error.message);
        }finally{
            setLoading(false);
        };
        
    };


  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
        <label className="flex flex-col gap-2 text-white">
          Nom
          <input name="nom" type="text" className="border border-white rounded h-12" />
        </label>
        <label className="flex flex-col gap-2 text-white">
          Email
          <input name="email" type="email" className="border border-white rounded  h-12" />
        </label>
        <label className="flex flex-col gap-2 text-white">
          <textarea
            name="text"
            id=""
            placeholder="Ecrivez votre message..."
            className="border border-white rounded h-44 p-3"
          ></textarea>
        </label>

        <label className="flex flex-row gap-2 text-white">
          <input type="checkbox" className="border w-5" name="condition"/>
          J'accepte les Conditions
        </label>

        <div>
            
          <Btn color="text-green-900 bg-white">{loading ? "Envoi..." : "Envoyer"}</Btn>
        </div>
      </form>
    </>
  );
}
