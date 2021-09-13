import { HeaderContainer } from './styles';
import { Sun, Moon } from 'react-feather';
import Logo from '../../assets/images/devfinder.svg';
import { useState } from 'react';

export function Header() {

  const [themeMode, setThemeMode] = useState({
    mode: 'Light',
    icon: <Sun/>
  });

  function handleChangeThemeMode() {
    console.log('Entrou');

    if(themeMode.mode === 'Light') {
      setThemeMode({
        mode: 'Dark',
        icon: <Moon/>
      });
    } else {
      setThemeMode({
        mode: 'Light',
        icon: <Sun/>
      });
    }
  }

  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo - devfinder" />
      <span onClick={handleChangeThemeMode}>{themeMode.mode} {themeMode.icon}</span>
    </HeaderContainer>
  )
}