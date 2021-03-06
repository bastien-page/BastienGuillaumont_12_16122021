import React from "react";
import PropTypes from "prop-types";

/**
 * @description Component Hello
 * @param {string} name name of user
 * @returns ReactComponent
 */

function Hello({ name }) {
  return (
    <section className="hello">
      <h2 className="hello__title">
        Bonjour <span>{name}</span>
      </h2>
      <p className="hello__message">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </section>
  );
}

Hello.propTypes = {
  name: PropTypes.string,
};

export default Hello;
