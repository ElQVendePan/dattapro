import { useNavigate, useLocation } from 'react-router-dom'

export const useModal = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Abre el modal con contenido identificado
  const openModal = (modalContent?: string, params?: Record<string, string | number>) => {
    // Detectar parámetros existentes en la url
    const url = new URLSearchParams(location.search);
    url.set("modal", modalContent || "");

    // iterar parámetros dinámicos
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.set(key, String(value));
      });
    }

    // Navegar a la nueva URL con los parámetros actualizados
    navigate(`${location.pathname}?${url.toString()}`);
  };


  // Cierra el modal
  const closeModal = () => {
    // Eliminar el parámetro 'modal' de la URL
    const url = new URLSearchParams(location.search)
    url.delete('modal')
    // Navegar a la nueva URL sin el parámetro 'modal'
    navigate(`${location.pathname}?${url.toString()}`)
  }

  // Estado del modal
  const params = new URLSearchParams(location.search)
  const modalContent = params.get('modal')
  const isOpen = modalContent !== null

  return { openModal, closeModal, isOpen, modalContent }
}