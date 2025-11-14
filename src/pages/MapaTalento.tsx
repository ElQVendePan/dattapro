import { FaSearch, FaSlidersH } from "react-icons/fa"
import Header from "../components/Header"
import Input from "../components/Input"
import Button from "../components/Button"
import PerfilSmallCard from "../components/perfil/PerfilSmallCard"
import ScrollContainer from "react-indiana-drag-scroll"
import CentroInvestigacionCard from "../components/CentroInvestigacionCard"

const MapaTalento = () => {
    return (
        <div className="mb-20">
            <div className="relative bg-bg-secondary w-screen -ml-5 p-5 -mt-5 pt-22">
                <img src="/default-bg.jpg" className="w-full h-full object-cover absolute opacity-0 top-0 left-0" alt="" />
                <Header title="Mapa de Talento"></Header>
                <div className="flex items-center gap-2 relative">
                    <Input icon={<FaSearch className="w-full h-full" />} placeholder="¿Que es lo que buscas?" className="" />
                    <Button className="w-14 h-14 shrink-0 bg-bg-third">
                        <FaSlidersH className="w-5/6 h-5/6 mx-auto" />
                    </Button>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="font-bold mb-2 lg:mb-2">Nuevos Perfiles</h2>
                <ScrollContainer className="w-screen gap-4 -ml-5 overflow-x-hidden overflow-y-visible py-4 px-5 whitespace-nowrap cursor-grab active:cursor-grabbing">
                    <div className="inline-block mr-4">
                        <PerfilSmallCard />
                    </div>
                    <div className="inline-block mr-4">
                        <PerfilSmallCard />
                    </div>
                    <div className="inline-block mr-4">
                        <PerfilSmallCard />
                    </div>
                    <div className="inline-block mr-4">
                        <PerfilSmallCard />
                    </div>
                </ScrollContainer>
            </div>
            <div className="mt-6">
                <h2 className="font-bold mb-2 lg:mb-2">Centros de Investigación</h2>
                <ScrollContainer className="w-screen gap-4 -ml-5 overflow-x-hidden overflow-y-visible py-4 px-5 whitespace-nowrap cursor-grab active:cursor-grabbing">
                    <div className="inline-block mr-4">
                        <CentroInvestigacionCard />
                    </div>
                    <div className="inline-block mr-4">
                        <CentroInvestigacionCard />
                    </div>
                    <div className="inline-block mr-4">
                        <CentroInvestigacionCard />
                    </div>
                    <div className="inline-block mr-4">
                        <CentroInvestigacionCard />
                    </div>
                    <div className="inline-block mr-4">
                        <CentroInvestigacionCard />
                    </div>
                    <div className="inline-block">
                        <CentroInvestigacionCard />
                    </div>
                </ScrollContainer>
            </div>
        </div>
    )
}

export default MapaTalento
