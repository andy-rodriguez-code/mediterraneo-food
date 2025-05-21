import React, { useState } from 'react';
import { useMutation } from 'react-query';
import Loader from '../UI/Loader';

const Login = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginMutation = useMutation(async () => {
    // TODO: Integrar con Supabase Auth
    return new Promise(resolve => setTimeout(resolve, 1000));
  }, {
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (err) => {
      setError(err.message || 'Error al iniciar sesión');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor completa todos los campos');
      return;
    }
    loginMutation.mutate();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
      
      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 flex justify-center items-center"
          disabled={loginMutation.isLoading}
        >
          {loginMutation.isLoading ? (
            <Loader size="sm" color="white" />
          ) : (
            'Iniciar Sesión'
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;