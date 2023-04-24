import { Header } from "../../components/Header";
import { Outlet } from 'react-router-dom';
import { LayoutContainer, LeftPane, RightPane } from "./styles";

export function SignInLayout() {
    return (
        <LayoutContainer>
            <LeftPane>
                <Header />
                <Outlet />
            </LeftPane>
            <RightPane />
        </LayoutContainer>
    )
}