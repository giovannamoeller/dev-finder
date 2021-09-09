import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ProfileUser } from '../../components/ProfileUser';
import { Container } from './styles';
import { useState } from 'react';


export function Home() {
  const [username, setUsername] = useState('giovannamoeller');
  return (
      <Container>
        <Header/>
        <Input setUsername={setUsername}/>
        <ProfileUser username={username}/>
      </Container>
  )
}