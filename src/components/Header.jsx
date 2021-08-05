import React, { useContext } from 'react'
import { SiteContext } from '../App';

export const Header = () => {
  const { state } = useContext(SiteContext);
  return <h1>{state.name}</h1>
}
