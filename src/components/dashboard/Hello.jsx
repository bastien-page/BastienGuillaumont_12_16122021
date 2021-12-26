import React from "react";

function Hello({ name }) {
  return (
    <section className="hello">
      <h2 className="hello__title">
        Bonjour <span> {name}</span>
      </h2>
      <p className="hello__message">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </section>
  );
}

export default Hello;
