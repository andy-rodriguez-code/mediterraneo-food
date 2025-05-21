import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../UI/Loader';

const MiniCart = ({ onCheckout }) => {
  const { data: cartItems, isLoading } = useQuery('cart', async () => {
    // TODO: Integrar con API del carrito
    return [
      { id: 1, name: 'Pan de Masa Madre', price: 12.99, quantity: 2 },
      { id: 2, name: 'Croissant de Almendras', price: 8.50, quantity: 1 }
    ];
  });

  const total = cartItems?.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-80">
      <h3 className="text-lg font-semibold mb-4">Tu Carrito</h3>
      
      {isLoading ? (
        <div className="flex justify-center py-4">
          <Loader size="md" />
        </div>
      ) : (
        <>
          <div className="max-h-60 overflow-y-auto mb-4">
            {cartItems?.length > 0 ? (
              cartItems.map(item => (
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
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">Tu carrito está vacío</p>
            )}
          </div>

          {cartItems?.length > 0 && (
            <>
              <div className="flex justify-between font-bold border-t pt-2 mb-4">
                <span>Total:</span>
                <span>${total?.toFixed(2)}</span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Ir a Pagar
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MiniCart;