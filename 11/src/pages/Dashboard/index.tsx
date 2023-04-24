import { Sidebar } from "../../components/Sidebar";
import { DashboardContainer, DashboardLayout, FilterButton, Header, ImagePerfilContainer, Main, SearchContainer, SearchInput } from "./styles";
import ImagePerfil from '../../assets/ProfileImage.png';
import { BracketsCurly, FunnelSimple } from "@phosphor-icons/react";
import { ToDo } from "./components/ToDo";
import { Making } from "./components/Making";
import { Done } from "./components/Done";

export function Dashboard() {
    return (
        <div>
            <Sidebar />
            <DashboardLayout>
                <DashboardContainer>
                    <Header>
                        <h1>Meu Kanban<BracketsCurly size={56} weight="regular" /></h1>
                        <ImagePerfilContainer><img src={ImagePerfil} alt="Imagem de perfil" /></ImagePerfilContainer>
                    </Header>
                    <SearchContainer>
                        <FilterButton><FunnelSimple size={24} weight="bold" />Filtrar</FilterButton>
                        <SearchInput type={"search"} placeholder="Busque por cards, assuntos ou responsáveis..." />
                    </SearchContainer>
                    <Main>
                        <ToDo />
                        <Making />
                        <Done />
                    </Main>
                </DashboardContainer>
            </DashboardLayout>
        </div>
    )
}