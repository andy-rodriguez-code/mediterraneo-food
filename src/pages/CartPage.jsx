import React from 'react';
import { useQuery, useMutation } from 'react-query';
import Loader from '../components/UI/Loader';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { data: cartItems, isLoading, refetch } = useQuery('cart', async () => {
    // TODO: Integrar con API del carrito
    return [
      { id: 1, name: 'Pan de Masa Madre', price: 12.99, quantity: 2, image: '/bread.jpg' },
      { id: 2, name: 'Croissant de Almendras', price: 8.50, quantity: 1, image: '/croissant.jpg' }
    ];
  });

  const updateMutation = useMutation(async () => {
    // TODO: Integrar con API para actualizar cantidad
    return new Promise(resolve => setTimeout(resolve, 500));
  }, {
    onSuccess: () => refetch()
  });

  const removeMutation = useMutation(async () => {
    // TODO: Integrar con API para eliminar item
    return new Promise(resolve => setTimeout(resolve, 500));
  }, {
    onSuccess: () => refetch()
  });

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    updateMutation.mutate({ id, quantity: newQuantity });
  };

  const total = Array.isArray(cartItems) 
  ? cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tu Carrito de Compras</h1>
      
      {isLoading ? (
        <div className="flex justify-center py-12">
          <Loader size="lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems?.length > 0 ? (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {cartItems.map(item => (
                  <div key={item.id} className="border-b last:border-b-0 p-4 flex">
                    <div className="w-24 h-24 bg-gray-100 rounded-md mr-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center mt-2">
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="px-2 py-1 border rounded-l"
                          disabled={updateMutation.isLoading}
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border-t border-b">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="px-2 py-1 border rounded-r"
                          disabled={updateMutation.isLoading}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button 
                        onClick={() => removeMutation.mutate(item.id)}
                        className="text-red-500 mt-2 text-sm"
                        disabled={removeMutation.isLoading}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h2 className="text-xl font-semibold mb-2">Tu carrito está vacío</h2>
                <p className="text-gray-600 mb-4">Agrega productos para continuar</p>
                <Link 
                  to="/products"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Ver Productos
                </Link>
              </div>
            )}
          </div>

          {cartItems?.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6 h-fit">
              <h2 className="text-xl font-semibold mb-4">Resumen de Compra</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${total?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío:</span>
                  <span>Calculado al pagar</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${total?.toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block w-full bg-green-600 text-white py-3 px-4 rounded hover:bg-green-700 text-center"
              >
                Proceder al Pago
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;