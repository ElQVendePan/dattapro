import { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { TiWarning } from 'react-icons/ti'
import { useModal } from '../hook/useModal'

const Modal = () => {

    const startY = useRef<number | null>(null)
    const [translateY, setTranslateY] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const { isOpen } = useModal()

    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = originalStyle
        }
    }, [])

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        startY.current = e.touches[0].clientY
        setIsDragging(true)
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (startY.current !== null) {
            const diff = e.touches[0].clientY - startY.current
            if (diff > 0) {
                setTranslateY(diff) // solo movemos hacia abajo
            }
        }
    }

    const handleTouchEnd = () => {
        setIsDragging(false)
        if (translateY > 150) {
            console.log('Cerrar modal 🚪') // umbral de cierre
            setTranslateY(0)
        } else {
            setTranslateY(0) // vuelve a su lugar
        }
        startY.current = null
    }

    return (
        <>
            <div className={`${isOpen ? 'visible' : 'hidden'} bg-black/15 backdrop-blur-lg fixed inset-0 flex items-center justify-center`}>
                <div className={`${isOpen ? 'bottom-0 opacity-100' : '-bottom-30 opacity-0'} bg-white absolute w-full px-4 pt-3 pb-8 rounded-t-3xl`}
                    style={{
                        transform: `translate3d(0, ${translateY}px, 0)`,
                        transition: isDragging
                            ? 'none'
                            : 'transform 0.2s, opacity 0.2s, bottom 0.2s',
                        willChange: 'transform, opacity, bottom',
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <hr className={`h-1 rounded-full border-none bg-black ${isDragging ? 'w-14 opacity-50' : 'w-12 opacity-20'} mx-auto mb-6 duration-100`} />
                    {/* Image of the modal */}
                    <div className='w-16 h-16 text-primary mx-auto mb-3'>
                        <TiWarning className='w-full h-full' />
                    </div>
                    {/* title of the modal */}
                    <h2 className='text-center text-lg font-semibold mb-2'>Prueba de modal</h2>
                    {/* body of the modal */}
                    <div className='min-h-8'>
                        <p className='text-center text-neutral-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p>
                    </div>
                    {/* button of the modal */}
                    <div className='mt-6 grid grid-cols-2 gap-4'>
                        <Button>Cancelar</Button>
                        <Button primary>Aceptar</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
