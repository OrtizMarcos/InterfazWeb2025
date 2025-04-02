# InterfazWeb2025

## INTEGRANTES DEL GRUPO JAM

> **👤 Participantes del Grupo**
> - 💻 **Desarrollador:** Jack Delvalle
> - 💻 **Desarrollador:** Marcos Ortiz
> - 💻 **Desarrollador:** Ana Duarte

## EVIDENCIA DE VERSIONES
![image](https://github.com/user-attachments/assets/6d79f337-99f1-4607-b0f0-7ba70b735c5e)

![image](https://github.com/user-attachments/assets/357ed5ea-fbc0-476b-bb88-f6c7b191ac8c)

![image](https://github.com/user-attachments/assets/73b41bb5-0d56-4e82-99f4-32d6c057561d)

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
    docker run -p 5173:5173 react-app
    ```
El servidor de desarrollo de Vite estará corriendo en `http://localhost:5173`.

---

