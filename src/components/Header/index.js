import { HeaderContainer } from './styles';
import { Sun, Moon } from 'react-feather';
import LogoDark from '../../assets/images/devfinder.svg';
import LogoLight from '../../assets/images/devfinder-light.svg';

export function Header({themeMode, setThemeMode}) {

  function handleChangeThemeMode() {
    themeMode.mode === 'Light' ? setThemeMode({
      mode: 'Dark',
      icon: <Moon/>
    }) : setThemeMode({
      mode: 'Light',
      icon: <Sun/>
    });
  }

  return (
    <HeaderContainer themeMode={themeMode}>
      {themeMode.mode === 'Light' ? (
        <img src={LogoLight} alt="Logo - devfinder" />
      ) : (
        <img src={LogoDark} alt="Logo - devfinder" />
      )}
      <span onClick={handleChangeThemeMode}>{themeMode.mode} {themeMode.icon}</span>
    </HeaderContainer>
  )
}