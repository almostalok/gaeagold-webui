import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import { appSlice } from './appSlice';
import saga from '../sagas';


// configure the store
const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = configureStore({
    reducer: {
      app: appSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  });
  sagaMiddleware.run(saga);
  return store;
};

export const appStore = makeStore();
// Create and export the next-redux-wrapper wrapper (if you use getServerSideProps / getStaticProps)
export const wrapper = createWrapper(makeStore);
