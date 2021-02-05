import { storeState, addPlayer, newPlayer2 } from '../src/js/character.js'

describe('storeState', () => {
  test("should test that storeState returns an empty object", () => {
    expect(storeState()()).toEqual({});
  });
});

describe('addPlayer', () => {
  test("Sucessfully store a character", () => {
    expect(addPlayer(newPlayer2)).toEqual({hp: 10, mp: 8, class: "Cleric", str: 8, def: 8, wis: 12, con: 8});
  });
});