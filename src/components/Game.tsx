import TicTac from "./TicTac";
import "/home/yavar/React/TicTacGame/src/css/tictac.css";
import { useDispatch, useSelector } from "react-redux";

import { gameOn } from "/home/yavar/React/TicTacGame/src/components/store/tictacAction/GameAction";
import { change } from "/home/yavar/React/TicTacGame/src/components/store/tictacAction/GameAction";

const Game = () => {
  const dispatch: any = useDispatch();
  const state = useSelector((state: any) => state.tictac.items);

  console.log("State -->", state);

  const handleClick = (id: number) => {
    console.log("state id =", state[id].id, "=id", id);

    dispatch(change(id));
    dispatch(gameOn());
  };

  return (
    <div className="parentBox">
      {state.map((item: any, index: any) => (
        <TicTac
          key={item.id}
          click={() => handleClick(index)}
          on={item.on}
          index={index}
        />
      ))}
    </div>
  );
};
export default Game;
