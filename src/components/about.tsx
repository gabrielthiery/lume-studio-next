import { Circle, Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

const ourPrinciples = [
  {
    title: "Créativité au service du sens",
    description:
      "Une vidéo n'est pas qu'une image : c'est une intention, une histoire, une émotion. Je conçois des contenus qui marquent et reflètent votre identité.",
  },
  {
    title: "Collaboration & écoute",
    description:
      "Votre vision guide la création. Je vous accompagne à chaque étape pour transformer vos idées en images.",
  },

  {
    title: "Transparence & rigueur",
    description:
      "Processus clair, échanges fluides et tarifs transparents pour une collaboration sereine et efficace.",
  },
  {
    title: "Exigence technique",
    description:
      "Cadrage, lumière, montage, couleur — chaque détail compte. Mon objectif : sublimer vos images et transmettre votre message avec précision.",
  },
];

export default function ContentSection() {
  return (
    <section className="py-20 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-12 px-6 md:space-y-16">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              Faire rayonner vos idées en images
            </h2>
          </ScrollView>
          <ScrollView>
            <p>
              Je suis Alexandre Thiery, vidéaste professionnel à Paris.
              <br /><br />
              Depuis 3 ans, j'accompagne marques, artistes et entreprises dans la création de contenu vidéo à forte valeur émotionnelle et narrative.
              <br /><br />
              Avec 26 projets réalisés, je maîtrise chaque étape de production — cadrage, montage, étalonnage — pour garantir un rendu élégant, moderne et fidèle à votre univers.
              <br /><br />
              Chaque vidéo est pour moi l'occasion de sublimer un message, raconter une histoire et créer une expérience mémorable.
            </p>
          </ScrollView>
        </div>
        <ScrollView>
          <div className="mt-12 mb-8">
            <h3 className="text-3xl font-semibold mb-12 text-center">Ma philosophie</h3>
          </div>
          <div className="relative mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ourPrinciples.map((principle, index) => (
              <div className="space-y-4" key={index}>
                <div className="flex items-center gap-3">
                  <Circle className="size-5" />
                  <h3 className="text-base font-semibold">{principle.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
