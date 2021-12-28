import React from "react";
import calories from "../../assets/iconCalories.png";
import proteines from "../../assets/iconProteins.png";
import glucides from "../../assets/iconGlucides.png";
import lipides from "../../assets/iconLipides.png";

import { useParams } from "react-router-dom";
import { GetKeyData } from "../../services/getData";

function KeyData() {
  const { id } = useParams();
  const userId = id;

  const data = GetKeyData(userId);

  return (
    <div className="keydata">
      <div className="keydata__data">
        <div className="keydata__data__bgicon calories">
          <img src={calories} alt="logo" />
        </div>
        <div>
          <p className="keydata__data__unit">{data.calorieCount}kCal</p>
          <p className="keydata__data__title">Calories</p>
        </div>
      </div>

      <div className="keydata__data">
        <div className="keydata__data__bgicon proteines">
          <img src={proteines} alt="logo" />
        </div>
        <div>
          <p className="keydata__data__unit">{data.proteinCount}g</p>
          <p className="keydata__data__title">Proteines</p>
        </div>
      </div>

      <div className="keydata__data">
        <div className="keydata__data__bgicon glucides">
          <img src={glucides} alt="logo" />
        </div>
        <div>
          <p className="keydata__data__unit">{data.carbohydrateCount}g</p>
          <p className="keydata__data__title">Glucides</p>
        </div>
      </div>

      <div className="keydata__data">
        <div className="keydata__data__bgicon lipides">
          <img src={lipides} alt="logo" />
        </div>
        <div>
          <p className="keydata__data__unit">{data.lipidCount}g</p>
          <p className="keydata__data__title">Lipides</p>
        </div>
      </div>
    </div>
  );
}

export default KeyData;
