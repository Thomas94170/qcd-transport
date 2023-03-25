import React from 'react';
import TadaA from './Tada';

export default function Avis(){

    return(
        <>
        <div className="w-full sm:w-full max-w-full bg-white m-10 border border-gray shadow-lg shadow-gray-500/50">
            
                <TadaA/>
                <br/>
                <div className="flex justify-center m-10">
                    <div className='m-5 border border-gray shadow-lg shadow-gray-500/50 card'>
                    <p className = "text-center  text-sm m-4" >
                        « Nous avons fait appel à la société QCD transport pour une livraison en urgence en Seine
                        et Marne (77). La réactivité et le souci de satisfaire notre client ont été les facteurs
                        clés lors de cette collaboration. » 
                    </p>
                    <p className = "text-center mt-5 " >
                        David LENOBLE - secteur BTP
                    </p>
                    </div>
                    <div className=' card-avis m-5 border border-gray shadow-lg shadow-gray-500/50 card'>
                    <p className = "text-center  text-sm m-4" >
                    « Le service sur mesure est selon moi la réelle valeur ajoutée de QCD Transport. 
                    Dans le cadre d’un déménagement nous avons pu compter sur la souplesse et l’implication 
                    de la société pour optimiser l’organisation de notre déménagement. »
                    </p>
                    <p className = "text-center mt-5 " >
                        Alexis - Etudiant
                    </p>
                    </div>
                    <div className='m-5 border border-gray shadow-lg shadow-gray-500/50 card'>
                    <p className = "text-center  text-sm m-4" >
                    « QCD TRANSPORT a su résoudre ma problématique de transport de matériel électrique 
                    en l'espace de 45 minutes top chrono. J'en reste encore bluffé, je recommande fortement ! »
                    </p>
                    <p className = "text-center mt-5 " >
                    Melissa COMTE – Responsable logistique
                    </p>
                    </div>
                    <div className='m-5 border border-gray shadow-lg shadow-gray-500/50 card'>
                    <p className = "text-center  text-sm m-4" >
                    « Notre client (laboratoire) nous a recommandé de solliciter QCD pour une livraison en express. 
                    Malgré l’urgence, nous avons pu nous entendre sur un prix compétitif et une livraison dans 
                    les temps. Nul doute que nous ferons de nouveau appel à cette société. » 
                    </p>
                    <p className = "text-center mt-5 " >
                    Sabrina GERARD – secteur pharmaceutique
                    </p>
                    </div>
                </div>
        </div>
        </>
    )
}