export const firstPlayer = () => {
  return (dispatch: any) => {
    dispatch({
      type: "FIRST_PLAYER",
    });
  };
};

export const secondPlayer = () => {
  return (dispatch: any) => {
    dispatch({
      type: "SECOND_PLAYER",
    });
  };
};

export const gameOn = () => {
  return (dispatch: any) => {
    dispatch({
      type: "GAME_ON",
    });
  };
};

export const change=(id:any)=>{
  return(dispatch:any)=>{
    dispatch({
      type:"TRIGGER",
      id,
    })
  }
}
export const PlayerSwitch=()=>{
  return(dispatch:any)=>{
    dispatch({
      type:"SWITCH",
    })
  }
}