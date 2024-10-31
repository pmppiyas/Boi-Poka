import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className='flex flex-col justify-center items-center space-y-2 bg-gray-300 h-svh'>
      <h2 className="text-5xl">Opps!</h2>
      <p>Sorry, Somthing Wrong!</p>
      <p>{error.statusText || error.message}!!!</p>
    </div>
  );
}
