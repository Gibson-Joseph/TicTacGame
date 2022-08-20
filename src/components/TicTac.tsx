import { stat } from "fs";
import { useEffect, useState } from "react";
import "/home/gibson/TicTacGame/tic-tac/src/css/tictac.css";

const TicTac = () => {
  const [firstPlayer, setFirstPlayer] = useState<any>("O");
  const [seconPlayer, setSecondPlayer] = useState<any>("X");
  let flag = false;
  const [game, setGame] = useState(false);

  const handleClick = () => {
    flag = true;
    setGame(!game);
    console.log("Clicked", game);
  };
  // useEffect(() => {});
  return (
    // <div>
    <div className="box" onClick={() => handleClick()}>
      <h1 className="h1">{game ? firstPlayer : flag ? seconPlayer : " "}</h1>
      {/* </div> */}
    </div>
  );
};
export default TicTac;
