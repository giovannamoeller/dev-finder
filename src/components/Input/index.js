import { InputContainer } from './styles';
import { Search } from 'react-feather';

export function Input() {

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <InputContainer onSubmit={handleFormSubmit}>
      <Search color="#2778FF" strokeWidth={2.5} size={32}/>
      <input type="text" placeholder="Search Github Username"/>
      <button type="submit">Search</button>
    </InputContainer>
  )
}