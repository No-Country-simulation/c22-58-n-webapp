import { create } from 'zustand';

const usePedidos = create((set) => ({
  pedidos: [
    {
      id: '#37594',
      mesa: 1,
      items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'],
      total: 200,
      completado: false,
    },
  ],
  marcarCompletado: (id: any) =>
    set((state: any) => ({
      pedidos: state.pedidos.map((pedido: any) =>
        pedido.id === id ? { ...pedido, completado: true } : pedido
      ),
    })),
  agregarPedido: (nuevoPedido: any) =>
    set((state: any) => ({
      pedidos: [...state.pedidos, nuevoPedido],
    })),
  eliminarPedido: (id: any) =>
    set((state: any) => ({
      pedidos: state.pedidos.filter((pedido: any) => pedido.mesa !== id),
    })),
}));

export default usePedidos;
