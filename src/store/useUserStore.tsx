import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserData {
  id?: string
  name?: string
  email?: string
  // otros campos opcionales
}

interface UserStore {
  userData: UserData | null
  setUserData: (data: UserData) => void
  clearUserData: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userData: null,

      // Guarda los datos del usuario (sin redirigir desde aquí)
      setUserData: (data) => {
        console.log('✅ Usuario autenticado:', data)
        set({ userData: data })
      },

      // Limpia los datos y cierra sesión
      clearUserData: () => {
        console.log('🚪 Cerrando sesión...')
        set({ userData: null })
        localStorage.removeItem('user-store')
      },
    }),
    {
      name: 'user-store',
    }
  )
)