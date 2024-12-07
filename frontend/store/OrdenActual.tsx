import { create } from 'zustand';

const useOrdenActual = create((set) => ({
  orden: [
    {
      nombre: 'producto 1',
      precio: 100,
    },
  ],
  agregarALaOrden: (nuevo) =>
    set((state) => ({
      orden: [...state.orden, nuevo],
    })),
  quitarALaOrden: (nombrePlato) =>
    set((state) => ({
      orden: state.orden.filter((objeto) => objeto.nombre !== nombrePlato),
    })),
  limpiarOrden: () => set({ orden: [] }),
}));

export default useOrdenActual;
