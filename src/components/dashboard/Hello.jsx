import React from "react";

function Hello({ data }) {
  return (
    <section className="hello">
      <h2 className="hello__title">
        Bonjour <span> {data}</span>
      </h2>
      <p className="hello__message">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </section>
  );
}

export default Hello;
