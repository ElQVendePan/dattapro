interface CentroInvestigacionCardProps {
    id: string;
    nombre: string;
    subtitulo: string;
}

const CentroInvestigacionCard = ({ id, nombre, subtitulo }: CentroInvestigacionCardProps) => {
    return (
        <div className="bg-bg-secondary w-full p-5 relative rounded-2xl flex items-start gap-4 border-1 border-bg-secondary overflow-hidden hover:brightness-110 hover:scale-98 hover:border-primary duration-200">
            <img className="absolute w-full h-20 object-cover left-0 top-0" src={`/centro-investigativo/${id}-bg.jpg`} alt="" />
            <div className="relative w-full mt-6">
                <div className="w-16 h-16 overflow-hidden rounded-xl shrink-0">
                    <img className="w-full h-full object-cover" src={`/centro-investigativo/${id}-logo.jpg`} alt="" />
                </div>
                <h2 className="font-bold mt-4">{nombre}</h2>
                <p className="text-xs opacity-70 w-full">{subtitulo}</p>
                <div className="mt-4 flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-bg-third">
                        <img className="w-full h-full object-cover"
                            src="https://this-person-does-not-exist.com/img/avatar-gen5ba2b421272a56fe90adff789a2753e1.jpg"
                            alt="" />
                    </div>
                    <div className="-ml-3 w-8 h-8 rounded-full overflow-hidden border-2 border-bg-third">
                        <img className="w-full h-full object-cover"
                            src="https://this-person-does-not-exist.com/img/avatar-gen5ba2b421272a56fe90adff789a2753e1.jpg"
                            alt="" />
                    </div>
                    <div className="-ml-3 w-8 h-8 rounded-full overflow-hidden border-2 border-bg-third">
                        <img className="w-full h-full object-cover"
                            src="https://this-person-does-not-exist.com/img/avatar-gen5ba2b421272a56fe90adff789a2753e1.jpg"
                            alt="" />
                    </div>
                    <div className="-ml-3 w-8 h-8 rounded-full overflow-hidden border-2 border-bg-third">
                        <img className="w-full h-full object-cover"
                            src="https://this-person-does-not-exist.com/img/avatar-gen5ba2b421272a56fe90adff789a2753e1.jpg"
                            alt="" />
                    </div>
                    <div className="-ml-3 w-8 h-8 rounded-full overflow-hidden border-2 border-bg-third">
                        <img className="w-full h-full object-cover"
                            src="https://this-person-does-not-exist.com/img/avatar-gen5ba2b421272a56fe90adff789a2753e1.jpg"
                            alt="" />
                    </div>
                    <div className="-ml-3 w-8 h-8 rounded-full overflow-hidden border-2 border-bg-third">
                        <img className="w-full h-full object-cover"
                            src="https://this-person-does-not-exist.com/img/avatar-gen5ba2b421272a56fe90adff789a2753e1.jpg"
                            alt="" />
                    </div>
                    <div className="-ml-3 w-8 h-8 rounded-full overflow-hidden border-2 border-bg-third bg-bg-third flex items-center justify-center text-xs font-bold">
                        <p>+1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CentroInvestigacionCard
