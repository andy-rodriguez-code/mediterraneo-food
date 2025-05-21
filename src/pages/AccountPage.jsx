import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loader from '../components/UI/Loader';

const AccountPage = () => {
  const { data: userData, isLoading: userLoading } = useQuery('user', async () => {
    // TODO: Integrar con API de usuario
    return {
      firstName: 'Juan',
      lastName: 'Pérez',
      email: 'juan@example.com',
      shippingAddress: 'Calle 123 #45-67, Bogotá'
    };
  });

  const { data: orders, isLoading: ordersLoading } = useQuery('orders', async () => {
    // TODO: Integrar con API de pedidos
    return [
      {
        id: 'ORD-12345',
        date: '2025-05-15',
        total: 42.48,
        status: 'Entregado',
        items: [
          { name: 'Pan de Masa Madre', quantity: 2, price: 12.99 },
          { name: 'Croissant de Almendras', quantity: 1, price: 8.50 }
        ]
      },
      {
        id: 'ORD-12344',
        date: '2025-05-10',
        total: 25.98,
        status: 'Entregado',
        items: [
          { name: 'Tarta de Limón', quantity: 1, price: 15.99 }
        ]
      }
    ];
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mi Cuenta</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Información del Perfil</h2>
          
          {userLoading ? (
            <div className="flex justify-center py-4">
              <Loader size="md" />
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Nombre</p>
                <p className="font-medium">
                  {userData?.firstName} {userData?.lastName}
                </p>
              </div>
              
              <div>
                <p className="text-gray-600">Email</p>
                <p className="font-medium">{userData?.email}</p>
              </div>
              
              <div>
                <p className="text-gray-600">Dirección de Envío</p>
                <p className="font-medium">{userData?.shippingAddress}</p>
              </div>
              
              <button className="mt-6 text-blue-600 hover:text-blue-800">
                Editar Perfil
              </button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Historial de Pedidos</h2>
          
          {ordersLoading ? (
            <div className="flex justify-center py-4">
              <Loader size="md" />
            </div>
          ) : (
            <div className="space-y-6">
              {orders?.length > 0 ? (
                orders.map(order => (
                  <div key={order.id} className="border-b pb-4 last:border-b-0">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">Pedido #{order.id}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                    
                    <div className="mb-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <p>
                            {item.quantity} x {item.name}
                          </p>
                          <p>${(item.quantity * item.price).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className={`px-2 py-1 text-xs rounded ${
                        order.status === 'Entregado' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                      <p className="font-medium">Total: ${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No hay pedidos recientes</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;