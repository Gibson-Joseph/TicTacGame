const GameReducer = (
  state = {
    firstPlayer: "O",
    secondPlayer: "X",
    default: false,
    changePlayer: false,
    items: [
      {
        id: 0,
        on: false,
        switch: false,
      },
      {
        id: 1,
        on: false,
        switch: false,
      },
      {
        id: 2,
        on: false,
        switch: false,
      },
      {
        id: 3,
        on: false,
        switch: false,
      },
      {
        id: 4,
        on: false,
        switch: false,
      },
      {
        id: 5,
        on: false,
        switch: false,
      },
      {
        id: 6,
        on: false,
        switch: false,
      },
      {
        id: 7,
        on: false,
        switch: false,
      },
      {
        id: 8,
        on: false,
        switch: false,
      },
    ],
  },
  action: any
) => {
  switch (action.type) {
    case "GAME_ON":
      return { ...state, default: true };

    case "TRIGGER":
      return {
        ...state,
        items: state.items.map((item: any, index) => {
          if (item.id !== action.id) {
            return item;
          }
          return {
            ...item,
            on: !item.on,
            switch: !item.switch,
          };
        }),
        changePlayer: !state.changePlayer,
      };

    default:
      return state;
  }
};
export default GameReducer;
