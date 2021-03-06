import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from './atoms';

export default function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input
        placeholder="type something"
        type="text"
        value={text}
        onChange={onChange}
      />
      <br />
      Echo: {text}
    </div>
  );
}
