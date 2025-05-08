"use client";

import { IconButton } from "@material-tailwind/react";

export default function DropboxImage() {
  return (
    <div className="relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      {/* image */}
      <div>
        <img
          src="/images/cutedog.jpeg"
          className="w-full aspect-square rounded-2xl"
        />
      </div>
      {/* file name */}
      <div>cutedog.jpg</div>
      <div className="absolute top-4 right-4">
        <IconButton color="red"
          onClick={() => {}}>
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}
