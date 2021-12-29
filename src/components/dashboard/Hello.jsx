import React from "react";
import PropTypes from "prop-types";
import { GetName } from "../../services/getData";

/**
 * Create Hello component
 * @param {string} User Id
 * @returns {React Component}
 */

function Hello({ userId }) {
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

Hello.propTypes = {
  userId: PropTypes.string,
};

export default Hello;
