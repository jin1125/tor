import React, { useContext } from 'react';
import { SiteContext } from '../App';

export const Body = () => {
  const {state} = useContext(SiteContext);
  return <p>これは「{state.name}」の内容です</p>
}
