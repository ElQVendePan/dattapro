import { useNavigate, useLocation } from 'react-router-dom'

export const useModal = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Abre el modal con contenido identificado
  const openModal = (modalContent?: string) => {
    const url = new URLSearchParams(location.search)
    url.set('modal', modalContent || '')
    navigate(`${location.pathname}?${url.toString()}`)
  }

  // Cierra el modal
  const closeModal = () => {
    const url = new URLSearchParams(location.search)
    url.delete('modal')
    navigate(`${location.pathname}?${url.toString()}`)
  }

  // Estado del modal
  const params = new URLSearchParams(location.search)
  const modalContent = params.get('modal')
  const isOpen = modalContent !== null

  return { openModal, closeModal, isOpen, modalContent }
}