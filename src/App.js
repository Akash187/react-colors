import React,  { useReducer, useEffect } from 'react';
import ColorsContext from './context/colors-context';
import ColorsReducer from './reducers/colors-reducer';
import seedColors from './seedColors';
import Router from "./routes/Router";


function App() {

  const [colors, dispatch] = useReducer(ColorsReducer, []);

  useEffect(() => {
    const colors = JSON.parse(localStorage.getItem('colors'));
    dispatch({ type: 'POPULATE_COLORS', colors: colors || seedColors });
  }, []);

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors))
  }, [colors]);

  return (
    <ColorsContext.Provider value={{ colors, dispatch }}>
      <Router/>
    </ColorsContext.Provider>
  );
}

export default App;
