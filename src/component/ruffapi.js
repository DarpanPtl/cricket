import React, { useEffect } from "react";
import { useState } from "react";
import MyCard from "./MyCard";

const ApiData = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url =
        "https://api.cricapi.com/v1/currentMatches?apikey=8362c883-1f77-4046-9766-126f7c68fd05&offset=0";
      let data = await fetch(url);
      let parsedata = await data.json();
      setMatches(parsedata.data);
      console.log(parsedata);
    };
    fetchData();
  }, []);

  return (
    <>
      {matches.map((element) => {
        return (
          <MyCard
            teams={element.name === "Durham"}
            teamInfo={element.teamInfo}
            score={element.status}
          />
        );
      })}
    </>
  );
};

export default ApiData;
