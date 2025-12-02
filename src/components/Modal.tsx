import { useEffect, useRef, useState } from 'react'
import { useModal } from '../hook/useModal'
import RedirectModal from '../modals/RedirectModal'
import ExportProfile from '../modals/ExportProfile'
import ExternalProfile from '../modals/ExternalProfile'
import UnauthorizedDataUse from '../modals/UnauthorizedDataUse'
import ValidateID from '../modals/ValidateID'
import CentroInvestigacionModal from '../modals/CentroInvestigacionModal'

const Modal = () => {
    const startY = useRef<number | null>(null)
    const startTime = useRef<number | null>(null)
    const [translateY, setTranslateY] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [isDraggingDown, setIsDraggingDown] = useState(false);
    const [isClosing, setIsClosing] = useState(false)
    const { isOpen, modalContent } = useModal()
    const [canDrag, setCanDrag] = useState(true);

    // Evitar scroll del fondo mientras el modal está abierto
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
    }, [isOpen])

    // Resetear posición cuando se abre
    useEffect(() => {
        if (isOpen && !isClosing) setTimeout(() => setTranslateY(0), 10)
    }, [isOpen, isClosing])

    // Cerrar modal suavemente
    const closeModalSmoothly = () => {
        setIsClosing(true)
        setTranslateY(window.innerHeight * 0.9)
        setTimeout(() => {
            //Se va hacia atrás en el historial
            window.history.back()
            setIsClosing(false)
            setTranslateY(0)
        }, 200)
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!canDrag) return; // ⛔ Bloquea drag si hay scroll interno
        startY.current = e.touches[0].clientY;
        startTime.current = Date.now();
        setIsDragging(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!canDrag || !startY.current) return;
        const diff = e.touches[0].clientY - startY.current;
        if (diff > 0) setTranslateY(diff);
        // Is dragging down?
        setIsDraggingDown(diff > 0);
        if (diff > 0) setTranslateY(diff);
    };

    // Manejo de gestos táctiles | Fin
    const handleTouchEnd = () => {
        if (!startY.current || !startTime.current) return

        const diff = translateY
        const velocity = diff / (Date.now() - startTime.current)
        const shouldClose = diff > 220 || velocity > 1.2

        setIsDragging(false)
        shouldClose ? closeModalSmoothly() : setTranslateY(0)

        startY.current = startTime.current = null
        setIsDragging(false);
        setIsDraggingDown(false);
    }

    return (
        <div className={`z-50 fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-xl transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div
                className={`absolute overflow-hidden bottom-0 w-full px-4 pt-3 pb-8 bg-bg-primary rounded-t-3xl transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                style={{
                    transform: `translate3d(0, ${isOpen || isClosing ? translateY : 60}px, 0)`,
                    transition: isDragging ? 'none' : 'transform 0.35s ease, opacity 0.25s ease',
                    willChange: 'transform, opacity',
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className='text-center pt-8'>
                    {(() => {
                        switch (modalContent) {
                            case 'redirect':
                                return <RedirectModal />;
                            case 'export-profile':
                                return <ExportProfile />;
                            case 'external-profile':
                                return <ExternalProfile />;
                            case 'unauthorized-data-use':
                                return <UnauthorizedDataUse />;
                            case 'validate-id':
                                return <ValidateID />;
                            case 'centro-investigacion':
                                return <CentroInvestigacionModal setCanDrag={setCanDrag} />;
                            default:
                                return null;
                        }
                    })()}
                </div>
                <div className='absolute top-3 w-full left-0'>
                    <hr className={`h-1 rounded-full mx-auto bg-bg-primary invert border-none transition-all ${isDraggingDown ? 'w-14 opacity-80' : 'w-12 opacity-30'}`} />
                </div>
            </div>
        </div>
    )
}

export default Modal