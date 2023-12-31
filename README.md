 MedBook Health Records Management System

This repository contains a simple web application developed to manage patient records for a private clinic. The application is built using Laravel for the backend and Angular for the frontend.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Deployment](#deployment)
- [Contact](#contact)

## Prerequisites

Before deploying the application, ensure you have the following software and tools installed:

- [Node.js](https://nodejs.org/) (for Angular)
- [Composer](https://getcomposer.org/) (for Laravel)
- [Laravel](https://laravel.com/docs/8.x/installation) (ensure Composer is globally installed)
- [Angular CLI](https://angular.io/cli) (install using `npm install -g @angular/cli`)

## Getting Started

### Backend Setup

1. **Clone this repository to your server or hosting environment.**

2. **Navigate to the backend directory:**
   ```sh
   cd medbook-dev-backend
Install Laravel dependencies:

sh
Copy code
composer install
Configure the .env file:

Rename .env.example to .env.
Update the database connection settings (e.g., database type, host, username, password).
Generate a new application key:

sh
Copy code
php artisan key:generate
Run database migrations:

sh
Copy code
php artisan migrate
Start the Laravel development server:

sh
Copy code
php artisan serve
Frontend Setup
Navigate to the frontend directory:

sh
Copy code
cd medbook-dev-frontend
Install Angular dependencies:

sh
Copy code
npm install
Configure API Endpoint:

Open src/environments/environment.ts and set the apiUrl to your backend API URL.
Serve the Angular app locally for testing:

sh
Copy code
ng serve
Deployment
To deploy the application to a production environment:

Build the Angular app:

sh
Copy code
ng build --prod
Upload the contents of the dist/medbook-dev-frontend directory to your web server.

Configure your web server to serve the Angular app and proxy requests to the Laravel backend.

Configure your production environment's database settings in the .env file on the server.

Update CORS settings on the Laravel backend to allow requests from your production domain.


