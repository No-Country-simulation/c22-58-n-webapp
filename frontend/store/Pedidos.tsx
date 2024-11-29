import { create } from 'zustand';

const usePedidos = create((set) => ({
  pedidos: [
    {
      id: 3456,
      mesa: 7,
      order: ['pizza', 'hamburguesa', 'hotdog'],
      hora: '12:14PM',
      completada: false,
    },
  ],
}));
