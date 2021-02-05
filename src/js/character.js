export const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state, playerName) => {
    const newState = stateChangeFunction(currentState, playerName);
    currentState = {...newState};
    return newState;
  }
}

export const addPlayer = (defaultValues) => {
  return (playerName) => {
    return (state) => ({
      ...state,
      [playerName] : defaultValues
    })
  }
}

export const changePlayerState = (prop) => {
  return (value) => {
    return (state, playerName) => ({
      ...state,
      [playerName] : {...state[playerName], [prop]: (state[playerName][prop] || 0) + value}
    })
  }
}

// UI

export const updateStateObj = storeState();
export const defaultValues = {hp: 10, mp: 8, class: "", str: 8, def: 8, wis: 8, con: 8};
const knightValues = {hp: 15, mp: 8, class: "Knight", str: 8, def: 12, wis: 8, con: 10};
const clericValues = {hp: 10, mp: 8, class: "Cleric", str: 8, def: 8, wis: 12, con: 8};

const newPlayer = addPlayer(knightValues)("Kite");
console.log(newPlayer);
export const newPlayer2 = addPlayer(clericValues)("Raven");

// const newState = updateStateObj(newPlayer);
// console.log("state obj", newState); // show current state
// const newState2 = updateStateObj(newPlayer2);
// console.log("state obj", newState2)
// const healthPotion = changePlayerState("hp")(10);
// const newState3 = updateStateObj(healthPotion, "Raven");
// console.log("state obj", newState3) // should show Raven hp up!
// const poison = changePlayerState("hp")(-10);
// const poisonState = updateStateObj(poison, "Raven");
// console.log("state obj", poisonState);

// if (Raven.hp <= 0) {
//   console.log("Raven is has died...")
// }