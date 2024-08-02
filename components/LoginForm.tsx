'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      if (res.status === 400) {
        setError('Kesalahan input. Mohon cek kembali email atau password Anda.');
      } else if (res.status === 500) {
        setError('Terjadi kesalahan pada server. Mohon coba lagi nanti.');
      } else {
        setError('Email atau Password Anda Salah');
      }
    } else if (res?.ok && res.url) {
      window.location.replace(res.url);
    }
    setIsProcessing(false);
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
          disabled={isProcessing}
        />
      </div>
      <div className="mb-4 text-center">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-9/12 px-4 py-2 border rounded-3xl text-white focus:outline-none focus:border-blue-500 bg-white bg-opacity-30 placeholder-gray-700"
          placeholder="Password"
          disabled={isProcessing}
        />
      </div>
      {error && <p className=" mb-4 text-center text-white">{error}</p>}
      <div className="text-center">
        <button
          type="submit"
          className={`w-9/12 bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 transition duration-300 ${isProcessing ? 'cursor-not-allowed' : ''}`}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <div className="flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-3 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Processing...
            </div>
          ) : (
            'Login'
          )}
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
