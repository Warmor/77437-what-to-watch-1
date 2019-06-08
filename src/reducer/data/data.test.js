import MockAdapter from "axios-mock-adapter";
import {createAPI} from "~/api";
import {
  ActionType,
  Operation,
} from "~/reducer/data/data";


describe(`Reducer works correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const api = createAPI();
    const dispatch = jest.fn();
    const apiMock = new MockAdapter(api);
    const dataLoader = Operation.loadFilmsAndGenre();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_GENRE,
          payload: [{fake: true}],
        });
      });
  });
});
