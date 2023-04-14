import React from "react";
// import ApiData from "./component/ApiData.js";

const MyCard = ({
  key,
  team1,
  team2,
  team1Score,
  team1Wickets,
  team1Overs,
  team2Score,
  team2Wickets,
  team2Overs,
  date,
}) => {
  // let { teams, score } = props;

  return (
    <div>
      <div className="grid grid-cols-3  p-4 flex justify-center  ">
        <div className="  h-22 bg-gray-300 ">
          Team name:-{team1}
          score:-{team1Score}
          Wickets:-{team1Wickets}
          Overs:-{team1Overs}
        </div>
        <div className=" h-22 bg-gray-300 ">
          <img
            className="h-22 mx-12"
            src="https://png.pngtree.com/png-vector/20210222/ourmid/pngtree-luxury-vs-versus-png-transparent-png-image_2940755.jpg"
          />
        </div>
        <div className="h-22 bg-gray-300">
          Team name:-{team2}
          score:-{team2Score}
          Wickets:-{team2Wickets}
          Overs:-{team2Overs}
        </div>
      </div>
      //////////////////////////////////////
      <div className="  mt-4 flex justify-center ">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Show Detail
        </button>

        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          {new Date(date).toString()}
        </button>
      </div>
    </div>
  );
};

export default MyCard;
