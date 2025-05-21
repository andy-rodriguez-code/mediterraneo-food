# Mediterranean Food - Technical Architecture Specification

## 1. System Overview
```mermaid
graph TD
    A[Client] -->|HTTPS| B[Vite/React Frontend]
    B -->|API Calls| C[Node.js/Express Backend]
    C -->|PostgREST| D[Supabase PostgreSQL]
    C -->|Auth| E[Supabase Auth]
    C -->|Storage| F[Supabase Storage]
```

## 2. Technology Stack

### Frontend
- **React.js**: Component-based architecture ideal for e-commerce UIs
- **Vite**: Fast build tool for modern React apps
- **React Router**: Client-side routing
- **React Query**: Data fetching and state management
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

### Backend
- **Node.js/Express.js**: Lightweight and performant API server
- **Supabase Client**: Official SDK for Supabase integration
- **JWT Authentication**: For secure user sessions

### Database
- **Supabase PostgreSQL**: Fully managed PostgreSQL with realtime capabilities
- **PostgREST**: Auto-generated REST API from database schema
- **Row-Level Security**: Fine-grained access control

## 3. Key User Flows

```mermaid
journey
    title User Journey
    section Browse Products
      View Product List: 5: User
      Filter by Category: 4: User
      View Product Details: 5: User
    section Shopping
      Add to Cart: 5: User
      View Cart: 4: User
      Update Quantity: 3: User
    section Checkout
      Enter Shipping: 5: User
      Select Payment: 5: User
      Place Order: 5: User
    section Account
      Login/Register: 4: User
      View Order History: 3: User
      Manage Profile: 2: User
```

## 4. Database Schema

```mermaid
erDiagram
    users ||--o{ orders : places
    products ||--o{ order_items : "ordered as"
    orders ||--o{ order_items : contains
    
    users {
        uuid id PK
        string email
        string encrypted_password
        string first_name
        string last_name
        string shipping_address
        timestamp created_at
    }
    
    products {
        uuid id PK
        string name
        string description
        string category
        decimal price
        string image_url
        boolean featured
        timestamp created_at
    }
    
    orders {
        uuid id PK
        uuid user_id FK
        string status
        decimal total
        timestamp created_at
    }
    
    order_items {
        uuid id PK
        uuid order_id FK
        uuid product_id FK
        integer quantity
        decimal unit_price
    }
```

## 5. API Endpoints

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/products` | GET | List all products | No |
| `/api/products/:id` | GET | Get single product | No |
| `/api/products/category/:category` | GET | Filter by category | No |
| `/api/cart` | GET | Get cart contents | Yes |
| `/api/cart` | POST | Add to cart | Yes |
| `/api/cart/:id` | PUT | Update cart item | Yes |
| `/api/cart/:id` | DELETE | Remove from cart | Yes |
| `/api/checkout` | POST | Process checkout | Yes |
| `/api/orders` | GET | List user orders | Yes |
| `/api/orders/:id` | GET | Get order details | Yes |
| `/auth/register` | POST | Register new user | No |
| `/auth/login` | POST | Login user | No |

## 6. Frontend Component Structure

```
src/
├── components/
│   ├── Layout/ (Header, Footer)
│   ├── Product/ (Card, List, Details)
│   ├── Cart/ (MiniCart, CartPage)
│   ├── Checkout/ (Steps, PaymentForm)
│   ├── Auth/ (Login, Register)
│   └── UI/ (Buttons, Modals, Loaders)
├── pages/
│   ├── Home
│   ├── Products
│   ├── ProductDetail
│   ├── Cart
│   ├── Checkout
│   └── Account
├── hooks/ (Custom hooks)
├── context/ (React context)
├── services/ (API clients)
└── utils/ (Helpers)