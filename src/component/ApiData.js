import React, { Fragment, useEffect } from "react";
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
      {matches.map((match) => {
        return (
          <MyCard
            key={match.id}
            team1={match.teams[0]}
            team2={match.teams[1]}
            team1Score={match.score[0]?.r}
            team1Wickets={match.score[0]?.w}
            team1Overs={match.score[0]?.o}
            team2Score={match.score[1]?.r}
            team2Wickets={match.score[1]?.w}
            team2Overs={match.score[1]?.o}
            date={match.date}
          />
        );
      })}
    </>
  );
};

export default ApiData;
