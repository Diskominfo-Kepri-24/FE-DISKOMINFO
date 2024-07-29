'use client'; // Pastikan ini adalah file klien

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
      // Redirect based on the role
      window.location.replace(res.url); // Redirect to the URL returned by NextAuth
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="btn">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
