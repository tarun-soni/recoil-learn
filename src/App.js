import './styles.css';
import React from 'react';
import { RecoilRoot } from 'recoil';

import CharacterCounter from './CharacterCounter';

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <CharacterCounter />
      </div>
    </RecoilRoot>
  );
}
