
import React from 'react';

const App: React.FC = () => {
  return (
    <main className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Привед, Медвед!
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          A simple, yet elegant, greeting.
        </p>
      </div>
    </main>
  );
};

export default App;
