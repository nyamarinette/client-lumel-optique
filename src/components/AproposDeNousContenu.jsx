import Image from "next/image";

export default function AProposDeNousContenu() {
  return (
    <section>
      {/* components */}
      <div className="py-16">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <Image
                src="https://maria-bucket-1.s3.us-east-1.amazonaws.com/D%C3%A9veloppeuse+Web/Les+plateformes+web+de+ma+client%C3%A8le/Bethel+Eyes+Care_Site+Internet/Les+images+du+site+internet/Page+d'acceuil/bienvenue-image.jpg"
                alt="image"
                className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl shadow-2xl"
                width={500}
                height={500}
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h1 className="text-2xl text-gray-900 font-bold md:text-4xl">
                À propos de Lumel Optique
              </h1>
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Votre vision, notre passion.
              </h2>
              <p className="mt-6 text-gray-600">
                Depuis notre création, Lumel Optique s’est donné pour mission
                d’offrir à chacun une vision claire, un style affirmé et un
                service personnalisé. Nous croyons que chaque paire de lunettes
                raconte une histoire;la vôtre.
              </p>
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Une équipe d’experts à votre service
              </h2>
              <p className="mt-4 text-gray-600">
                Notre équipe est composée d’opticiens diplômés et passionnés,
                toujours à l’écoute de vos besoins visuels et esthétiques. Que
                vous ayez besoin de lunettes de vue, de soleil, de lentilles ou
                d’un examen de la vue, nous sommes là pour vous accompagner à
                chaque étape.
              </p>
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Un large choix de montures
              </h2>
              <p className="mt-6 text-gray-600">
                Nous sélectionnons avec soin une large gamme de montures pour
                tous les styles et tous les budgets, allant des grandes marques
                internationales aux créateurs indépendants. Vous trouverez chez
                nous des modèles pour adultes, enfants et adolescents.
              </p>
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Une optique éthique et responsable
              </h2>
              <p className="mt-6 text-gray-600">
                Parce que nous croyons en une consommation plus responsable,
                nous mettons également en avant des collections
                éco-responsables, fabriquées à partir de matériaux recyclés ou
                durables.
              </p>
              <h3 className="text-xl text-gray-900 font-bold md:text-2xl">
                Prenez rendez-vous dès aujourd’hui
              </h3>
              <p className="mt-4 text-gray-600">
                Votre santé visuelle mérite toute notre attention.
                Contactez-nous pour planifier votre prochain rendez-vous ou
                simplement poser vos questions.
              </p>
              <p>
                Chez Lumel Optique, Nous sommes fiers de vous accompagner dans
                le choix de vos lunettes, avec expertise, bienveillance et
                passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}