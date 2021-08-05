import React , {useReducer} from 'react';
import { Body } from './components/Body';
import { Form } from './components/Form';
import { Header } from './components/Header';


const initialState = {
  name : 'Jinta\' Site'
}

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload
      };
    default : 
      return state
  }
}

export const SiteContext = React.createContext();

const SiteProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <SiteContext.Provider value={{state, dispatch}}>
    {children}
  </SiteContext.Provider>
}

export default function App() {
  return (
    <SiteProvider>
      <Header />
      <Body />
      <Form />
    </SiteProvider>
  );
}