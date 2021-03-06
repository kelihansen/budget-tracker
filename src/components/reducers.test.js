import {
  categories,
  CATEGORIES_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE } from './reducers';

describe('categories', () => {
  it('has a default value of an empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });

  const food = {
    name: 'food',
    budget: 500
  };
  
  const shelter = {
    name: 'shelter',
    budget: 1500
  };

  it('loads categories', () => {
    const state = categories([], { type: CATEGORIES_LOAD, payload: [food, shelter] });
    expect(state).toEqual([food, shelter]);
  });

  it('adds a category', () => {
    const prevState = [food];
    const state = categories(prevState, { type: CATEGORY_ADD, payload: shelter });
    expect(state).toEqual([food, shelter]);
    expect(state).not.toBe(prevState);
  });

  it('updates a category', () => {
    const state = categories(
      [{ id: 1, name: 'shelter', budget: 1500 }],
      {
        type: CATEGORY_UPDATE,
        payload: { id: 1, name: 'shelter', budget: 2000 }
      }
    );
    expect(state).toEqual([{ id: 1, name: 'shelter', budget: 2000 }]);
  });

  it('removes a category', () => {
    const state = categories([food, shelter], { type: CATEGORY_REMOVE, payload: shelter });
    expect(state).toEqual([food]);
  });
});