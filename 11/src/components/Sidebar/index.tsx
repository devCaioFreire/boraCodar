import { SidebarContainer, Header, Nav, Footer, ButtonToggle } from './styles';
import Logo from '../../assets/frGreenMetalic.svg';
import { CubeFocus, DevToLogo, FileText, GearFine, Moon, Sun } from '@phosphor-icons/react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../context/themeContext';
import { useContext } from 'react';
import { darkTheme, lightTheme } from '../../styles/theme/Theme';

export function Sidebar() {

    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme === lightTheme ? darkTheme : lightTheme}>
            <SidebarContainer>
                <Header>
                    <img src={Logo} alt="Logo do site" />
                </Header>
                <Nav>
                    <ul>
                        <li>
                            <a href='#'><CubeFocus size={24} weight="fill" /><span>Boards</span></a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href='#'><DevToLogo size={24} weight="fill" /><span>Equipe</span></a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href='#'><FileText size={24} weight="fill" /><span>Relatórios</span></a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href='#'><GearFine size={24} weight="bold" /><span>Ajustes</span></a>
                        </li>
                    </ul>
                </Nav>
                <Footer>
                    <ButtonToggle onClick={toggleTheme}>
                        {theme === lightTheme
                            ? <span><Moon size={26} weight="fill" />Dark</span>
                            : <span><Sun size={26} weight="fill" />Light</span>
                        }
                    </ButtonToggle>
                </Footer>
            </SidebarContainer>
        </ThemeProvider>
    )
}