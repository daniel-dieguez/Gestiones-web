# Comité Olímpico Guatemalteco - Gestión de Solicitudes

Este proyecto es una aplicación web para la gestión de solicitudes del **Comité Olímpico Guatemalteco**. Proporciona una interfaz interactiva para crear, buscar, actualizar y eliminar solicitudes, conectándose a una API backend.

---

## 🌟 **Características**

- **Gestión de Solicitudes**:
  - Crear nuevas solicitudes.
  - Buscar solicitudes mediante palabras clave.
  - Actualizar solicitudes existentes.
  - Eliminar solicitudes.

- **Diseño Responsivo y Moderno**:
  - Compatible con dispositivos móviles, tablets y escritorios.
  - Interfaz visual atractiva con tarjetas estilizadas y colores corporativos.

- **Notificaciones en Tiempo Real**:
  - Alertas visuales (Swal) para confirmar operaciones exitosas o informar errores.

- **Componentización con React**:
  - Componentes reutilizables como formularios, modales y tarjetas para organización modular.

---

## 🛠 **Tecnologías Utilizadas**

### Frontend:
- **React.js**: Biblioteca principal para construir la interfaz de usuario.
- **CSS Modules**: Para estilos aislados y personalizados.
- **Bootstrap**: Para una maquetación y diseño responsivo.
- **SweetAlert2 (Swal)**: Para alertas visuales atractivas.

### Backend:
- **ASP.NET Core**: Framework para el desarrollo de la API REST.
- **Entity Framework Core**: Para la interacción con la base de datos.

---

## 🚀 **Instalación y Uso**

### **Requisitos Previos**
1. Node.js instalado.
2. API backend en funcionamiento (ver sección de backend).
---

## 🖼 **Capturas de Pantalla**

### Página Principal:
![Página Principal](https://via.placeholder.com/800x400)

### Modal de Actualización:
![Modal de Actualización](https://via.placeholder.com/800x400)

---

## 📚 **Estructura del Proyecto**
```plaintext
/
├── src
│   ├── components
│   │   ├── Forms.jsx       # Componente principal de formularios
│   │   ├── ModalSearch.jsx # Modal para búsqueda de solicitudes
│   │   └── ModalUpdate.jsx # Modal para actualizar solicitudes
│   ├── style
│   │   └── start.module.css # Estilos personalizados
│   └── App.js              # Componente raíz de la aplicación
├── public
│   └── index.html          # Archivo HTML principal
└── package.json            # Dependencias y scripts del proyecto
```

---

## 🌐 **API Endpoints (Backend)**

A continuación, los endpoints principales que el frontend consume:

- **GET** `/gestiones/viewAll` - Obtener todas las solicitudes.
- **POST** `/gestiones/newSolicitud` - Crear una nueva solicitud.
- **PUT** `/gestiones/updateGestion/{id}` - Actualizar una solicitud existente.
- **DELETE** `/gestion/delete/{id}` - Eliminar una solicitud.
- **GET** `/gestiones/{palabraClave}` - Buscar solicitudes por palabra clave.

---


