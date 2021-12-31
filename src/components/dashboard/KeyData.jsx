import React from "react";
import calories from "../../assets/iconCalories.png";
import proteines from "../../assets/iconProteins.png";
import glucides from "../../assets/iconGlucides.png";
import lipides from "../../assets/iconLipides.png";
import PropTypes from "prop-types";

/**
 * Create Key data component
 * @param {string} User Id
 * @returns {React Component}
 */

function KeyData({ keyData }) {
  return (
    <div className="keydata">
      <div className="keydata__data">
        <div className="keydata__data__bgicon calories">
          <img src={calories} alt="logo" />
        </div>
        <div>
          <p className="keydata__data__unit">{keyData.calorieCount}kCal</p>
          <p className="keydata__data__title">Calories</p>
        </div>
      </div>

      <div className="keydata__data">
        <div className="keydata__data__bgicon proteines">
          <img src={proteines} alt="logo" />
        </div>
        <div>
          <p className="keydata__data__unit">{keyData.proteinCount}g</p>
          <p className="keydata__data__title">Proteines</p>
        </div>
      </div>

      <div className="keydata__data">
        <div className="keydata__data__bgicon glucides">
          <img src={glucides} alt="logo" />
        </div>
        <div>
          <p className="keydata__data__unit">{keyData.carbohydrateCount}g</p>
          <p className="keydata__data__title">Glucides</p>
        </div>
      </div>

      <div className="keydata__data">
        <div className="keydata__data__bgicon lipides">
          <img src={lipides} alt="logo" />
        </div>
        <div>
          <p className="keydata__data__unit">{keyData.lipidCount}g</p>
          <p className="keydata__data__title">Lipides</p>
        </div>
      </div>
    </div>
  );
}

KeyData.propTypes = {
  keyData: PropTypes.object,
};

export default KeyData;
