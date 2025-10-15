import { useNavigate, useLocation } from 'react-router-dom';

export const useModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = () => {
    const currentUrl = location.pathname + location.search + location.hash;
    navigate(
      `${currentUrl}${currentUrl.includes('?') ? '&' : '?'}modal`
      // 👇 sin { replace: true }, así se crea un nuevo registro
    );
  };

  const closeModal = () => {
    const newUrl = location.pathname + location.search.replace(/[?&]modal/, '');
    navigate(newUrl); // también sin replace
  };

  const isOpen = new URLSearchParams(location.search).has('modal');

  return { openModal, closeModal, isOpen };
};
