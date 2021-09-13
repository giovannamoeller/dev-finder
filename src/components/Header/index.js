import { HeaderContainer } from './styles';
import { Sun, Moon } from 'react-feather';
import LogoDark from '../../assets/images/devfinder.svg';
import LogoLight from '../../assets/images/devfinder-light.svg';

export function Header({themeMode, setThemeMode}) {

  function handleChangeThemeMode() {
    themeMode.mode === 'light' ? setThemeMode({
      mode: 'dark',
      icon: <Moon/>
    }) : setThemeMode({
      mode: 'light',
      icon: <Sun/>
    });
  }

  return (
    <HeaderContainer themeMode={themeMode}>
      {themeMode.mode === 'light' ? (
        <img src={LogoLight} alt="Logo - devfinder" />
      ) : (
        <img src={LogoDark} alt="Logo - devfinder" />
      )}
      <span onClick={handleChangeThemeMode}>{themeMode.mode} {themeMode.icon}</span>
    </HeaderContainer>
  )
}