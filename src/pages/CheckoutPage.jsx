import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import Loader from '../components/UI/Loader';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
    paymentMethod: 'creditCard'
  });

  const { data: cartItems, isLoading: _isLoading } = useQuery('cart', async () => {
    // TODO: Integrar con API del carrito
    return [
      { id: 1, name: 'Pan de Masa Madre', price: 12.99, quantity: 2 },
      { id: 2, name: 'Croissant de Almendras', price: 8.50, quantity: 1 }
    ];
  });

  const checkoutMutation = useMutation(async () => {
    // TODO: Integrar con API de checkout
    return new Promise(resolve => setTimeout(resolve, 1000));
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkoutMutation.mutate();
  };

  const total = cartItems?.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Información de Envío</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="firstName">
                  Nombre
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="w-full p-2 border rounded"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="lastName">
                  Apellido
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="w-full p-2 border rounded"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="address">
                Dirección
              </label>
              <input
                id="address"
                name="address"
                type="text"
                className="w-full p-2 border rounded"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="city">
                  Ciudad
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className="w-full p-2 border rounded"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="postalCode">
                  Código Postal
                </label>
                <input
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  className="w-full p-2 border rounded"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Teléfono
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full p-2 border rounded"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <h2 className="text-xl font-semibold mb-4">Método de Pago</h2>
            <div className="space-y-2 mb-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={formData.paymentMethod === 'creditCard'}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span>Tarjeta de Crédito</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span>PayPal</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === 'cash'}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span>Efectivo al recibir</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-4 rounded hover:bg-green-700 flex justify-center items-center"
              disabled={checkoutMutation.isLoading}
            >
              {checkoutMutation.isLoading ? (
                <Loader size="sm" color="white" />
              ) : (
                'Confirmar Pedido'
              )}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Resumen de Pedido</h2>
          
          <div className="mb-6">
            {cartItems?.map(item => (
              <div key={item.id} className="flex justify-between py-2 border-b">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
                <p className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${total?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Envío:</span>
              <span>$5.00</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${(total + 5)?.toFixed(2)}</span>
            </div>
          </div>

          <Link
            to="/cart"
            className="block text-center text-blue-600 hover:text-blue-800"
          >
            ← Volver al carrito
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;