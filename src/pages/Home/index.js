import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ProfileUser } from '../../components/ProfileUser';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header/>
      <Input/>
      <ProfileUser/>
    </Container>
  )
}