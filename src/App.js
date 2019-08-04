import React,  { useReducer, useEffect } from 'react';
import ColorsContext from './context/colors-context';
import ColorsReducer from './reducers/colors-reducer';
import seedColors from './seedColors';
import Router from "./routes/Router";


function App() {

  const [state, dispatch] = useReducer(ColorsReducer, {});

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem('state'));
    if(state){
      dispatch({ type: 'POPULATE_INITIAL_VALUE', state});
    }else{
      dispatch({ type: 'POPULATE_INITIAL_VALUE',
        state: { colors: seedColors, sliderValue: 500, colorFormat: 'hex', showAlert: false, alertMessage: '' }
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state]);

  return (
    <ColorsContext.Provider value={{ state, dispatch }}>
      <Router/>
    </ColorsContext.Provider>
  );
}

export default App;
