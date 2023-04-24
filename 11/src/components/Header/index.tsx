import { Moon, Sun } from '@phosphor-icons/react';
import logo from '../../assets/frPurple.svg';
import { HeaderContainer, HeaderLeft, HeaderRight } from './styles';
import { useContext } from 'react';

import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../context/themeContext';

import { lightTheme, darkTheme } from '../../styles/theme/Theme';

export function Header() {

    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme === lightTheme ? darkTheme : lightTheme}>
            <HeaderContainer>
                <nav>
                    <HeaderLeft>
                        <img src={logo} alt="Logo da aplicação" />
                        <h2>Vertigo</h2>
                    </HeaderLeft>

                    <HeaderRight onClick={toggleTheme} title={'Alterar tema'}>
                        {theme === lightTheme ? <Moon size={26} weight="fill" /> : <Sun size={26} weight="fill" />}
                    </HeaderRight>
                </nav>
            </HeaderContainer>
        </ThemeProvider>
    )
};
