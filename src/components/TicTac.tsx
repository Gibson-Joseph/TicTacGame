import { useDispatch, useSelector } from "react-redux";
import "/home/yavar/React/TicTacGame/src/css/tictac.css";

const TicTac = ({ click, on, index }: any) => {
  const state = useSelector((state: any) => state.tictac);

  return (
    <div className="box" onClick={click}>
      <h1 className="h1">
        {state.default
          ? state.items[index].on
            ? state.changePlayer
              ? state.firstPlayer
              : state.secondPlayer
            : " "
          : " "}
      </h1>
    </div>
  );
};
export default TicTac;
