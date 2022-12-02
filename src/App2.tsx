import React from 'react';
import './App.css';

import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';


function App2() {
  return (
    <SampleProvider>
      <ReducerSample/>
    </SampleProvider>
  );
}

export default App2;
