import React from 'react';

export default function Book({ book }) {
  const { bookName, bookId, author, image, tags, category, rating } = book;
  return (
    <div className="card bg-base-100  shadow-xl p-2 md:p-4 border-2 flex">
      <figure className="bg-gray-200 py-8">
        <img className="h-60 rounded-md" src={image} alt={bookName} />
      </figure>
      <div className="space-y-2 py-4 flex-grow">
        <div className="flex gap-4">
          <p className="badge badge-secondary">{tags[0]}</p>
          <p className="badge badge-secondary">{tags[1]}</p>
        </div>
        <h2 className=" text-2xl font-medium">{bookName}</h2>
        <p>By: {author}</p>
      </div>
      <div className="border-t-2 border-dotted border-gray-500 flex justify-between">
        <p>{category}</p>
        <p>
          {rating}
          <span>
            <i class="fa-regular fa-star"></i>
          </span>
        </p>
      </div>
    </div>
  );
}
