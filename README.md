# c22-58-n-webapp

Proyecto No Country c22-58-n-webapp

# DishFlow

DishFlow es una aplicación diseñada para mejorar la eficiencia y la experiencia en restaurantes, modernizando la gestión de pedidos y el servicio al cliente mediante el uso de tecnología.

## Descripción del Proyecto

DishFlow permite:

- **Gestión de pedidos:** Recoge pedidos desde una tablet asignándolos a las mesas correspondientes.
- **Visualización de cuentas:** Muestra la cuenta de cada pedido para facilitar el cobro.
- **Sección de cocina:** Los pedidos se actualizan en tiempo real, permitiendo que la cocina comience su preparación de manera inmediata.

Con DishFlow, los restaurantes pueden atender más rápido a los clientes, ofreciendo un servicio moderno y dejando una excelente impresión.

## Tecnologías Utilizadas

El proyecto fue desarrollado con las siguientes herramientas y tecnologías:

- **Frontend:** React, React Router
- **Backend:** NestJS
- **ORM:** Prisma
- **Autenticación:** JSON Web Tokens (JWT)
- **Gestión de paquetes:** npm, pnpm

## Instalación y Configuración

1. Clona este repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd dishflow
   ```

2. Instala las dependencias:

   - **Backend:**
     ```bash
     cd backend
     pnpm install
     ```
   - **Frontend:**
     ```bash
     cd frontend
     npm install
     ```

3. Configura las variables de entorno en un archivo `.env` en las carpetas correspondientes.

4. Ejecuta el proyecto:
   - **Backend:**
     ```bash
     pnpm start
     ```
   - **Frontend:**
     ```bash
     npm run dev
     ```

## Uso

1. **Inicio de sesión:** Ingresa con tus credenciales asignadas.
2. **Gestión de pedidos:**
   - Asigna pedidos a las mesas.
   - Consulta la cuenta de cada pedido.
3. **Sección de cocina:** Observa los pedidos actualizándose en tiempo real para comenzar la preparación.

## Contribuidores

- Andres Ardilla
- Ruben Lopez
- Oscar Lozano
- Matias Cardillo
- Bryan Alegria
- Daniel Diaz

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
