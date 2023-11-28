import React from "react";

function MenuItem() {
  return (
    <div className="bg-gray-200 text-center p-4 rounded-lg transition-all hover:bg-white hover:shadow-md hover:shadow-black/25">
      <img
        className="max-h-auto max-h-48 block mx-auto"
        src="/images/pizza.png"
        alt="pizza"
      />
      <h4 className="font-semibold text-xl my-3">ABC Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to Cart $12
      </button>
    </div>
  );
}

export default MenuItem;
