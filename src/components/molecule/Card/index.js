import React from "react";
import Image from "next/image";
export function Card({ children, className, dataId, ref }) {
  return (
    <>
      <div ref={ref} className={`rounded-2xl p-4 ${className}`} data-id={dataId}>
        {children}
      </div>
      <div className="h-0.5 bg-gray-400 mx-4"></div>
    </>
  );
}

export function CardContent({ title, post, username, avatar }) {
  return (
    <div className="p-4 text-white  space-y-2">
      <div className="flex gap-3 items-top">
        {avatar && <Image src={avatar} alt="Avatar" className="rounded-full" width={50} height={50} />}
        <p className="font-bold">{username}</p>
      </div>

      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm">{post}</p>
    </div>
  );
}
