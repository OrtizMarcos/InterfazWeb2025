# InterfazWeb2025

## Integrantes del grupo JAM

---
> **👤 Participantes del Grupo**
> - 💻 **Desarrollador:** Jack Delvalle
> - 💻 **Desarrollador:** Marcos Ortiz
> - 💻 **Desarrollador:** Ana Duarte

---
## Evidencia de Entornos

---
![image](https://github.com/user-attachments/assets/6d79f337-99f1-4607-b0f0-7ba70b735c5e)

![image](https://github.com/user-attachments/assets/357ed5ea-fbc0-476b-bb88-f6c7b191ac8c)

![image](https://github.com/user-attachments/assets/73b41bb5-0d56-4e82-99f4-32d6c057561d)

---

# Proyecto Dockerizado de React con Vite

---
## Pasos para poner el proyecto en marcha:

---
1. Clona el proyecto:
    ```bash
    git clone https://github.com/OrtizMarcos/InterfazWeb2025.git
    cd InterfazWebReact
    ```
2. Instala/Actualiza las dependencias:
   ```bash
   npm install
   ```

3. **Construye la imagen de Docker:**
    ```bash
    docker build -t react-app .
    ```

4. **Ejecuta el contenedor:**
    ```bash
    docker run -p 5173:5173 react-app
    ```
El servidor de desarrollo de Vite estará corriendo en `http://localhost:5173`.

---

## Crear Proyecto para Carpeta Personal

1. Para poder crear un proyecto en el apartado de TrabajosIndividuales, 
se debe de estar en esa direccion.

   ```bash
   cd TrabajosIndividuales
   ```
2. Colocar el nombre del Package en minusculas y sin espacios.
Por ejemplo, si el Nombre de la carpeta es MarcosOrtiz entonces el Package name debe de ser:
>marcosortiz

3. El framework debe de ser:
>React

4. El variant debe de ser:
>JavaScript
---
Con estos pasos ya se deberia de haber creado un proyecto con tu nombre(No olvides de hacer pull de develop estando en tu rama)
