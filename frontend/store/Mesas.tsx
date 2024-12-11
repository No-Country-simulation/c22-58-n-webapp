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
          id: 13,
          x: 1,
          y: 3,
        },
        {
          id: 2,
          x: 3,
          y: 3,
        },
        {
          id: 3,
          x: 3,
          y: 4,
        },
        {
          id: 4,
          x: 3,
          y: 5,
        },
        {
          id: 5,
          x: 3,
          y: 6,
        },
        {
          id: 6,
          x: 3,
          y: 7,
        },
        {
          id: 7,
          x: 6,
          y: 2,
        },
        {
          id: 8,
          x: 6,
          y: 3,
        },
        {
          id: 9,
          x: 6,
          y: 4,
        },
        {
          id: 10,
          x: 6,
          y: 5,
        },
        {
          id: 11,
          x: 6,
          y: 6,
        },
        {
          id: 12,
          x: 6,
          y: 7,
        },
        {
          id: 14,
          x: 1,
          y: 6,
        },
        {
          id: 15,
          x: 8,
          y: 6,
        },
        {
          id: 16,
          x: 8,
          y: 3,
        },
      ],
    },
    {
      nombreArea: 'exterior',
      mesas: [
        {
          id: 17,
          x: 4,
          y: 2,
        },
        {
          id: 18,
          x: 5,
          y: 2,
        },
        {
          id: 19,
          x: 3,
          y: 3,
        },
        {
          id: 21,
          x: 2,
          y: 4,
        },
        {
          id: 23,
          x: 3,
          y: 5,
        },
        {
          id: 25,
          x: 4,
          y: 6,
        },
        {
          id: 20,
          x: 6,
          y: 3,
        },
        {
          id: 22,
          x: 7,
          y: 4,
        },
        {
          id: 24,
          x: 6,
          y: 5,
        },
        {
          id: 26,
          x: 5,
          y: 6,
        },
      ],
    },
    {
      nombreArea: 'planta alta',
      mesas: [
        {
          id: 27,
          x: 3,
          y: 3,
        },
        {
          id: 28,
          x: 4,
          y: 3,
        },
        {
          id: 29,
          x: 5,
          y: 3,
        },
        {
          id: 30,
          x: 6,
          y: 3,
        },
        {
          id: 31,
          x: 2,
          y: 4,
        },
        {
          id: 32,
          x: 7,
          y: 4,
        },
      ],
    },
  ],
  setMesa: (nuevaMesa: number) => set({ mesaSeleccionada: nuevaMesa }),
}));

export default useMesas;
