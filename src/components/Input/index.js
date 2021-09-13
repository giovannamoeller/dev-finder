import { InputContainer } from './styles';
import { Search } from 'react-feather';
import { useState } from 'react';

export function Input({ setUsername, themeMode }) {

  const [previewUsername, setPreviewUsername] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    setUsername(previewUsername);
    setPreviewUsername('');
  }

  return (
    <InputContainer onSubmit={handleFormSubmit} themeMode={themeMode}>
      <Search color="#2778FF" strokeWidth={2.5} size={32}/>
      <input type="text" placeholder="Search Github Username" value={previewUsername} onChange={(e) => setPreviewUsername(e.target.value)}/>
      <button type="submit">Search</button>
    </InputContainer>
  )
}