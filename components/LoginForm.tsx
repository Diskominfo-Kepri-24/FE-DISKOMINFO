'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError('Invalid credentials');
    } else if (res?.ok && res.url) {
      window.location.replace(res.url);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 text-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-9/12 px-4 py-2 border rounded-3xl text-white focus:outline-none focus:border-blue-500 bg-white bg-opacity-30 placeholder-gray-700"
          placeholder="Email"
        />
      </div>
      <div className="mb-4 text-center">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-9/12 px-4 py-2 border rounded-3xl text-white focus:outline-none focus:border-blue-500 bg-white bg-opacity-30 placeholder-gray-700"
          placeholder="Password"
        />
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="text-center">
        <button
          type="submit"
          className="w-9/12 bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </div>
      <p className="font-normal text-center text-white text-sm mt-4">
        Don’t Have Account?{" "}
        <a href="/magang/register">
          <span className="text-blue-200">Click here to Sign Up</span>
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
