"use client";

export default function Button() {
  return (
    <div>
      <button
        onClick={() => console.log("the button was clicked")}
        className="bg-green-500 rounded-sm px-4 py-1 mt-5"
      >
        click me
      </button>
    </div>
  );
}
