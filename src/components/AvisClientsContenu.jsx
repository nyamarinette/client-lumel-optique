import { avisDeNosClients } from "@/lib/data";
// import { Quote } from "lucide-react";
// import * as motion from "motion/react-client";
import Head from "next/head";

export default function AvisClientsContenu() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Avis clients | Lumel Optique</title>
      </Head>

      <main className="px-6 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">
          ⭐ Avis de nos clients
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Chez <strong>Lumel Optique</strong>, la satisfaction de nos clients
          est notre plus belle récompense.
        </p>

        <section className="grid gap-8 md:grid-cols-2">
          {avisDeNosClients.map((review, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="flex text-yellow-400 mb-2">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </section>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-2">
            🗣️ Vous êtes déjà client ?
          </h2>
          <p className="mb-4 text-gray-600">
            Votre avis compte énormément pour nous !
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Laisser un avis
          </button>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            📊 Note moyenne : 4.8 / 5
          </h3>
          <p className="text-gray-600 mb-6">Basée sur +250 avis clients</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="bg-gray-100 px-4 py-2 rounded">
              ⭐ Service client
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded">
              ⭐ Qualité des produits
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded">
              ⭐ Livraison rapide
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded">
              ⭐ Rapport qualité/prix
            </span>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            📍 Rejoignez notre communauté de clients satisfaits
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="/contactez-nous"
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Prendre rendez-vous
            </a>
            <a
              href="/nos-services"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300 transition"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}