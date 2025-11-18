import { create } from "zustand";

interface SignupState {
    data: any;
    setData: (newData: any) => void;
    resetData: () => void;
}

export const useSignupStore = create<SignupState>((set) => ({
    data: {},

    setData: (newData) =>
        set((state) => ({
            data: { ...state.data, ...newData }, // 🔥 merge de datos entre pantallas
        })),

    resetData: () =>
        set(() => ({
            data: {},
        })),
}));