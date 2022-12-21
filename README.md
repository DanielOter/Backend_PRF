# CUSTODIAN - Backend

## Informacion General
Grupo 2

### Integrantes
- Kenaan Chab
- Gabriel Ligresti Cruz
- Catalina Buljevich
- Daniel Otero

### Funcionalidades 

1. LogIn
2. ABM de Usuarios
3. ABM de Visitas
4. ABM de Notificaciones
4. ABM de Alertas

### Implementacion

1. Hacer fork del proyecto (opcional).
2. En terminal sobre una carpeta local "git clone + link del repo" para clonar el repositorio.
3. En terminal "cd /Backend_PRF" para ingresar a la carpeta del proyecto.
4. En terminal "npm install" para instalar dependencias.
5. Solicitar el archivo json correspondiente a las credenciales de firebase.
6. Crear archivo .env que contenga las siguientes variables:
    - DATABASE_URL = "mysql://"usuario de mysql":"contraseña"@localhost:3306/api_prf_db?schema=public"
    - GOOGLE_APPLICATION_CREDENTIALS = ./firebase.json
7. En terminal "prisma migrate dev --name init" para crear el esquema de base de datos y realizar la carga de datos por defecto.
8. En terminal "npm start" para iniciar la aplicación.

## Folder Tree
```
📦 Backend_PRF
├─ .gitignore
├─ README.md
├─ config
│  └─ firebase_config.js
├─ constants
│  └─ errors.js
├─ package-lock.json
├─ package.json
├─ prisma
│  ├─ schema.prisma
│  └─ seed.js
└─ src
   ├─ app.js
   ├─ controllers
   │  ├─ app
   │  │  ├─ alertsController.js
   │  │  ├─ guestController.js
   │  │  ├─ notificationController.js
   │  │  └─ userController.js
   │  ├─ authentication
   │  │  └─ signInController.js
   │  └─ common
   │     ├─ healthController.js
   │     └─ notFoundController.js
   ├─ database
   │  └─ repository.js
   ├─ middleware
   │  ├─ errorHandlerMiddleware.js
   │  └─ tokenMiddleware.js
   ├─ routes
   │  ├─ alert.js
   │  ├─ guest.js
   │  ├─ health.js
   │  ├─ index.js
   │  ├─ notFound.js
   │  ├─ notificacion.js
   │  ├─ signIn.js
   │  └─ user.js
   ├─ services
   │  ├─ alertService.js
   │  ├─ guestService.js
   │  ├─ notificationService.js
   │  ├─ signInService.js
   │  └─ userService.js
   └─ utilities
      ├─ createError.js
      └─ tryCatch.js
```