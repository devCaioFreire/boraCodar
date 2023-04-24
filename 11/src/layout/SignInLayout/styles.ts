import styled from "styled-components";
import bg from '../../assets/background.png'
import bgDark from '../../assets/backgroundDark.png';
import { darkTheme, lightTheme } from "../../styles/theme/Theme";

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const LeftPane = styled.div`
  flex: 1;
  max-width: 704px;
  margin-left: 5rem;
`;

export const RightPane = styled.div`
  flex: 1;
  background-image: url(${(props) => props.theme.colors.bgImageKey});
  background-size: cover;
  background-position: center;
`;

