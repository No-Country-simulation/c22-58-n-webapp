import { create } from 'zustand';

const usePedidos = create((set) => ({
  pedidos: [
    {
      id: '#37594',
      mesa: 'MESA #8',
      items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'],
      completado: false,
    },
    {
      id: '#37595',
      mesa: 'MESA #5',
      items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'],
      completado: false,
    },
    {
      id: '#37596',
      mesa: 'MESA #1',
      items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'],
      completado: false,
    },
    {
      id: '#37597',
      mesa: 'MESA #3',
      items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'],
      completado: false,
    },
    {
      id: '#37598',
      mesa: 'MESA #6',
      items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'],
      completado: true,
    },
  ],
  marcarCompletado: (id: any) =>
    set((state: any) => ({
      pedidos: state.pedidos.map((pedido: any) =>
        pedido.id === id ? { ...pedido, completado: true } : pedido
      ),
    })),
}));

export default usePedidos;
