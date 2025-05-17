import React, { useState, useEffect } from "react";
import "./JokesPage.css";

const jokes = [
  

  // Informatique générale
  "Pourquoi les développeurs n'aiment pas sortir de chez eux ? → Parce qu'ils ont déjà un environnement de développement intégré !",
  "Combien de programmeurs faut-il pour changer une ampoule ? → Aucun. C’est un problème matériel.",
  "Pourquoi Java est-il toujours célibataire ? → Parce qu’il ne trouve jamais de classe compatible.",
  "Pourquoi les programmeurs confondent-ils Halloween et Noël ? → Parce que OCT 31 == DEC 25.",
  "Que dit un programmeur quand il sort les poubelles ? → 'git push'",
  "Pourquoi est-ce que les informaticiens ont toujours froid ? → Parce qu’ils travaillent en C.",
  "Un jour, un 0 dit à un 1 : → 'Tu n’es qu’un chiffre !'",
  "Le wifi a rompu avec l’ethernet... → Il trouvait qu’il manquait de connexion.",
  "Pourquoi les bugs informatiques aiment les réunions ? → Parce qu’ils se reproduisent quand personne ne regarde.",
  "Un développeur entre dans un bar, commande une bière... → Puis il en commande 0, puis 1, puis 2, puis 3, puis 5, puis 8..."
];

 

function JokesPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % jokes.length);
    }, 5000); // Change de blague toutes les 5 sec
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="jokes-container">
      <h1>😄 Blagues de Développeurs</h1>
      <div className="joke-card">
        <p>{jokes[index]}</p>
      </div>
      <div className="joke-buttons">
        <button onClick={() => setIndex((index - 1 + jokes.length) % jokes.length)}>← Précédente</button>
        <button onClick={() => setIndex((index + 1) % jokes.length)}>Suivante →</button>
      </div>
    </div>
  );
}

export default JokesPage;
