import React, { useState } from 'react';
import { useMutation } from 'react-query';
import Loader from '../UI/Loader';

const Register = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const registerMutation = useMutation(async () => {
    // TODO: Integrar con Supabase Auth
    return new Promise(resolve => setTimeout(resolve, 1000));
  }, {
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (err) => {
      setError(err.message || 'Error al registrarse');
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (!Object.values(formData).every(Boolean)) {
      setError('Por favor completa todos los campos');
      return;
    }

    registerMutation.mutate();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Registro</h2>
      
      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

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
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full p-2 border rounded"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
            Confirmar Contraseña
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className="w-full p-2 border rounded"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 flex justify-center items-center"
          disabled={registerMutation.isLoading}
        >
          {registerMutation.isLoading ? (
            <Loader size="sm" color="white" />
          ) : (
            'Registrarse'
          )}
        </button>
      </form>
    </div>
  );
};

export default Register;