import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Definimos el tipo de los datos del usuario
interface UserData {
  id?: string
  name?: string
  email?: string
  // puedes agregar más campos según necesites
}

// Definimos el tipo del estado global
interface UserStore {
  userData: UserData | null
  setUserData: (data: UserData | null) => void
}

// Creamos el store persistente
export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userData: null,
      setUserData: (data) => {
        console.log('Setting user data:', data)
        set({ userData: data })
        window.location.href = `${import.meta.env.VITE_PAGE_URL}`
      },
    }),
    {
      name: 'user-store',
    }
  )
)