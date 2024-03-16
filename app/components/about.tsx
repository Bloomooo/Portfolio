export default function About() {
  return (
    <div>
      <h2 className="text-4xl font-extrabold mb-6 text-center text-white">
        Qui suis-je ?
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center p-6">
        <div className="w-full md:w-1/2">
          <p className="text-white text-lg leading-relaxed">
            Je suis un étudiant de 19 ans passionné par le développement
            informatique, les jeux vidéos, les mangas et les animes actuellement
            inscrit en deuxième année de BUT Informatique à l&apos;IUT Lyon 1
            Claude Bernard. Résidant à Annecy et Lyon, en France, j&apos;ai
            toujours été fasciné par la manière dont les ordinateurs et les
            logiciels peuvent transformer notre façon de vivre et de travailler.
            Mon parcours académique à l&apos;IUT Lyon 1 Claude Bernard m&apos;a
            permis d&apos;explorer divers aspects du développement logiciel, de
            la conception d&apos;algorithmes à la création d&apos;applications
            web. Chaque projet que j&apos;entreprends me permet
            d&apos;approfondir mes compétences en programmation et de découvrir
            de nouvelles technologies.
          </p>
        </div>
        <img
          src="https://f.hellowork.com/blogdumoderateur/2022/09/competences-indispensables-developpeur-web.jpg"
          alt="Votre image"
          className="w-full md:w-1/3 h-auto rounded-lg shadow-lg md:mb-8 md:mr-8"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-6">
        <div className="w-full md:w-1/2 md:order-2">
          <p className="text-white text-lg leading-relaxed">
            Ce qui me passionne le plus dans le développement informatique,
            c&apos;est la possibilité de créer des solutions innovantes qui
            peuvent résoudre des problèmes du monde réel. J&apos;aime relever
            des défis techniques et trouver des moyens créatifs de résoudre les
            problèmes auxquels je suis confronté. En dehors de mes études, je
            consacre beaucoup de temps à apprendre de manière autonome. Je
            participe à des communautés en ligne, je lis des livres spécialisés
            et je suis des tutoriels pour approfondir mes connaissances en
            programmation et en développement de logiciels. Je crois fermement
            que l&apos;informatique a le pouvoir de changer le monde, et je suis
            déterminé à contribuer à cet impact positif. Mon objectif est de
            devenir un développeur logiciel accompli, capable de concevoir des
            solutions innovantes qui améliorent la vie des gens et résolvent des
            problèmes complexes. Je suis enthousiaste à l&apos;idée de continuer
            à apprendre, à grandir et à développer mes compétences dans le
            domaine du développement informatique. Je suis convaincu que mon
            dévouement et ma passion me conduiront vers un avenir réussi dans ce
            domaine passionnant.
          </p>
        </div>
        <img
          src="https://jai-un-pote-dans-la.com/wp-content/uploads/2022/10/jupdlc-developpeur-2023-multimedia2.jpeg"
          alt="Votre image"
          className="w-full md:w-1/3 h-auto rounded-lg shadow-lg md:mb-8 md:ml-8 md:order-1"
        />
      </div>
    </div>
  );
}
