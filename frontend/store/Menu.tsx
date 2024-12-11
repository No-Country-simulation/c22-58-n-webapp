import { create } from 'zustand';

const useMenu = create((set) => ({
  categoria1: [
    {
      imagen:
        'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
      nombre: 'Filete de pollo',
      precio: 135,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2022/01/20/08/24/fish-6951734_1280.jpg',
      nombre: 'Atun',
      precio: 148,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2017/03/13/13/39/pancakes-2139844_1280.jpg',
      nombre: 'Hot Cakes',
      precio: 110,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2024/09/19/10/26/ai-generated-9058360_1280.jpg',
      nombre: 'Sopa de albondigas',
      precio: 127,
    },
  ],
  categoria2: [
    {
      imagen:
        'https://cdn.pixabay.com/photo/2021/02/06/19/29/pancakes-5989136_1280.jpg',
      nombre: 'Nieve',
      precio: 78,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2021/01/19/08/47/sandwich-5930496_1280.jpg',
      nombre: 'Hamburguesa de la casa',
      precio: 175,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2020/02/01/06/13/vegan-4809593_1280.jpg',
      nombre: 'Sopa 2',
      precio: 200,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg',
      nombre: 'Pizza original',
      precio: 199,
    },
  ],
  categoria3: [
    {
      imagen:
        'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_960_720.jpg',
      nombre: 'Costillas',
      precio: 149,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984_1280.jpg',
      nombre: 'Huevos con pan',
      precio: 122,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2024/02/17/01/45/ai-generated-8578594_1280.jpg',
      nombre: 'Empanadas',
      precio: 169,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg',
      nombre: 'Hamburguesa',
      precio: 145,
    },
  ],
}));

export default useMenu;
