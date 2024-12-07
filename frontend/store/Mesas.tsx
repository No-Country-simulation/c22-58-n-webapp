import { create } from 'zustand';

const useMesas = create((set) => ({
  mesaSeleccionada: 1,
  areas: [
    {
      nombreArea: 'principal',
      mesas: [
        {
          id: 1,
          x: 3,
          y: 2,
        },
        {
          id: 2,
          x: 5,
          y: 7,
        },
        {
          id: 3,
          x: 1,
          y: 4,
        },
      ],
    },
    {
      nombreArea: 'exterior',
      mesas: [
        {
          id: 4,
          x: 7,
          y: 1,
        },
        {
          id: 5,
          x: 3,
          y: 8,
        },
        {
          id: 6,
          x: 5,
          y: 7,
        },
      ],
    },
    {
      nombreArea: 'planta alta',
      mesas: [
        {
          id: 7,
          x: 3,
          y: 3,
        },
        {
          id: 8,
          x: 4,
          y: 3,
        },
        {
          id: 9,
          x: 5,
          y: 3,
        },
      ],
    },
  ],
  setMesa: (nuevaMesa: number) => set({ mesaSeleccionada: nuevaMesa }),
}));

export default useMesas;
