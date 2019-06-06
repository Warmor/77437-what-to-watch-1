import {ActionType, ActionCreator} from "~/reducer/catalog/catalog";

describe(`Business logic is correct`, () => {
  it(`Action creators work correctly`, () => {
    expect(ActionCreator.setActiveGenre(`Genre`)).toEqual({
      type: ActionType.SET_ACTIVE_GENRE,
      payload: `Genre`,
    });
  });
});
