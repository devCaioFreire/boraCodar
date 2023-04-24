import { Header } from "../../components/Header";
import { Outlet } from 'react-router-dom';
import { LayoutContainer, LeftPane, RightPane } from "./styles";

export function SignUpLayout() {
    return (
        <LayoutContainer>
            <LeftPane />
            <RightPane>
                <Header />
                <Outlet />
            </RightPane>
        </LayoutContainer>
    )
}