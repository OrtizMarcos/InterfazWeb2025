# Proyecto Dockerizado de React con Vite

## Pasos para poner el proyecto en marcha:

1. Clona el proyecto:
    ```bash
    git clone https://github.com/OrtizMarcos/InterfazWeb2025.git
    cd InterfazWeb2025
    ```

2. **Construye la imagen de Docker:**
    ```bash
    docker build -t react-app .
    ```

3. **Ejecuta el contenedor:**
    ```bash
    docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules --rm react-app
    ```

¡Y listo! El servidor de desarrollo de Vite estará corriendo en `http://localhost:5173`.

---


###  **Ventajas de este enfoque**:
- Todos los miembros del equipo tendrán el mismo entorno de desarrollo.
- Evita problemas de dependencias, versiones y configuraciones.
- Solo necesitan ejecutar unos pocos comandos para poner en marcha el proyecto.

---
