import React from 'react';
import BannerImg from '../assets/books.jpg';

export default function Home() {
  return (
    <div className="hero bg-base-200 h-max py-8 rounded-md">
      <div className="hero-content flex-col lg:flex-row-reverse h-full space-y-4">
        <img
          src={BannerImg}
          className="w-full lg:max-w-lg rounded-lg shadow-2xl scale-95 hover:scale-100 transition-transform"
        />
        <div className="flex flex-col items-start h-full justify-center gap-6 lg:gap-12">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn btn-success ">View The List</button>
        </div>
      </div>
    </div>
  );
}
