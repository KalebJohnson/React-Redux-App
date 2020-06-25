import React from 'react';
import Characters from './components/Characters';
import FadeIn from 'react-fade-in';

const App = () => (
  <div>
  <FadeIn transitionDuration='1000'>
    <h1 style={{display:'flex', justifyContent:'center'}}>Rick and Morty API</h1>
    <Characters />
  </FadeIn>
  </div>
)


export default App;