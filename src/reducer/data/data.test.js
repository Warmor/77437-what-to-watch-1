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
    const dataLoader = Operation.loadData();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_DATA,
          payload: [{fake: true}],
        });
      });
  });
});
