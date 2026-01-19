# E-Commerce Frontend Application

A modern React-based e-commerce frontend application built with Create React App, featuring comprehensive admin functionality and responsive design.

## Features

- **Product Management**: Full CRUD operations for products, categories, and brands
- **Admin Panel**: Complete administrative interface with dedicated routes
- **Responsive Design**: Mobile-first approach using Bootstrap framework
- **State Management**: Redux Toolkit with Redux Saga for complex async operations
- **Dynamic Content**: Home page with category-based product filtering
- **Form Validation**: Custom validation system for admin forms
- **Image Handling**: Product image upload and display functionality

## Tech Stack

- **Frontend**: React 18 with functional components and hooks
- **State Management**: Redux Toolkit + Redux Saga
- **Routing**: React Router DOM
- **Styling**: Bootstrap 5 with custom CSS
- **Animations**: WOW.js, Owl Carousel
- **Build Tool**: Create React App

## Architecture

- **Components**: Organized by functionality (Admin, Partials, Pages)
- **Redux Structure**: Action creators, reducers, and sagas for each entity
- **Data Flow**: API integration via sagas → state updates → component rendering

## Key Components

- **Home Page**: Dynamic product listings by category with testimonials
- **Admin Panel**: Product, category, brand, and testimonial management
- **Partials**: Reusable UI components (Navbar, Footer, Features, etc.)
- **Form Validators**: Custom validation logic for admin forms

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server

## API Integration

The application connects to a backend API for data operations through the Redux Saga middleware, handling all async operations and state management efficiently.