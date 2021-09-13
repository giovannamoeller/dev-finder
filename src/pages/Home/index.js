import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ProfileUser } from '../../components/ProfileUser';
import { Moon } from 'react-feather';
import { Container, Box } from './styles';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme/';

export function Home() {
  const [username, setUsername] = useState('');

  const [themeMode, setThemeMode] = useState({
    mode: 'dark',
    icon: <Moon/>
  });

  return (
      <ThemeProvider theme={themeMode.mode === 'light' ? theme.light : theme.dark}>
        <Box>
          <Container>
            <Header themeMode={themeMode} setThemeMode={setThemeMode}/>
            <Input setUsername={setUsername}/>
            <ProfileUser username={username}/>
          </Container>
        </Box>
      </ThemeProvider>
  )
}