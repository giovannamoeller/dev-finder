import { InputContainer } from './styles';
import { Search } from 'react-feather';
import { useContext, useState } from 'react';
import { UserContext } from '../../hooks/UserContext';

export function Input() {

  const [userName, setUsername] = useState('');
  const { setValue } = useContext(UserContext);

  function handleFormSubmit(e) {
    e.preventDefault();
    setValue(userName);
  }

  return (
    <InputContainer onSubmit={handleFormSubmit}>
      <Search color="#2778FF" strokeWidth={2.5} size={32}/>
      <input type="text" placeholder="Search Github Username" onChange={(e) => setUsername(e.target.value)}/>
      <button type="submit">Search</button>
    </InputContainer>
  )
}