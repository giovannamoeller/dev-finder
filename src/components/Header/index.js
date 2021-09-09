import { HeaderContainer } from './styles';
import { Sun } from 'react-feather';
import Logo from '../../assets/images/devfinder.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo - devfinder" />
      <span>Light <Sun/></span>
    </HeaderContainer>
  )
}