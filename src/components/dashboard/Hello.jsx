import React from "react";
import { useParams } from "react-router-dom";
import { GetName } from "../../services/getData";

function Hello() {
  const { id } = useParams();
  const userId = id;

  return (
    <section className="hello">
      <h2 className="hello__title">
        Bonjour <span>{GetName(userId)}</span>
      </h2>
      <p className="hello__message">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </section>
  );
}

export default Hello;
