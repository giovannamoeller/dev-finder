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
      <ThemeProvider theme={theme}>
        <Box themeMode={themeMode}>
          <Container>
            <Header themeMode={themeMode} setThemeMode={setThemeMode}/>
            <Input setUsername={setUsername} themeMode={themeMode}/>
            <ProfileUser username={username} themeMode={themeMode}/>
          </Container>
        </Box>
      </ThemeProvider>
  )
}