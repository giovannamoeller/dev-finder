import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ProfileUser } from '../../components/ProfileUser';
import { Container } from './styles';
import { UserContext } from '../../hooks/UserContext';
import { useState } from 'react';


export function Home() {
  const [value, setValue] = useState('default');
  return (
    <UserContext.Provider value={{value, setValue}}>
      <Container>
        <Header/>
        <Input/>
        <ProfileUser/>
      </Container>
    </UserContext.Provider>
  )
}