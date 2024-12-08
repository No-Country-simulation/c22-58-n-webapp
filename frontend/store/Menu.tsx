import { create } from 'zustand';

const useMenu = create((set) => ({
  categoria1: [
    {
      imagen:
        'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
      nombre: 'nombre del platillo',
      precio: 100,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2022/01/20/08/24/fish-6951734_1280.jpg',
      nombre: 'nombre del platillo2',
      precio: 200,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2017/03/13/13/39/pancakes-2139844_1280.jpg',
      nombre: 'nombre del platillo3',
      precio: 300,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2024/09/19/10/26/ai-generated-9058360_1280.jpg',
      nombre: 'nombre del platillo4',
      precio: 400,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2024/09/19/10/26/ai-generated-9058360_1280.jpg',
      nombre: 'nombre del platillo5',
      precio: 500,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2024/09/19/10/26/ai-generated-9058360_1280.jpg',
      nombre: 'nombre del platillo6',
      precio: 600,
    },
  ],
  categoria2: [
    {
      imagen:
        'https://cdn.pixabay.com/photo/2021/02/06/19/29/pancakes-5989136_1280.jpg',
      nombre: 'nombre del platillo',
      precio: 100,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2020/02/01/06/13/vegan-4809593_1280.jpg',
      nombre: 'nombre del platillo2',
      precio: 200,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg',
      nombre: 'nombre del platillo3',
      precio: 300,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2024/09/19/10/26/ai-generated-9058360_1280.jpg',
      nombre: 'nombre del platillo4',
      precio: 400,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg',
      nombre: 'nombre del platillo5',
      precio: 500,
    },
  ],
  categoria3: [
    {
      imagen:
        'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_960_720.jpg',
      nombre: 'nombre del platillo',
      precio: 100,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984_1280.jpg',
      nombre: 'nombre del platillo2',
      precio: 200,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2017/03/13/13/39/pancakes-2139844_1280.jpg',
      nombre: 'nombre del platillo3',
      precio: 300,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2024/02/17/01/45/ai-generated-8578594_1280.jpg',
      nombre: 'nombre del platillo4',
      precio: 400,
    },
    {
      imagen:
        'https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg',
      nombre: 'nombre del platillo5',
      precio: 500,
    },
  ],
}));

export default useMenu;