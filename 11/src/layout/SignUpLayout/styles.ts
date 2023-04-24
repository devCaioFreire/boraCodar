import styled from "styled-components";
import bg from '../../assets/background.png'

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const LeftPane = styled.div`
  flex: 1;
  background-image: url(${(props) => props.theme.colors.bgImageKey});
  background-size: cover;
  background-position: center;
`;

export const RightPane = styled.div`
  flex: 1;
  max-width: 704px;
  margin-left: 3rem;
`;

