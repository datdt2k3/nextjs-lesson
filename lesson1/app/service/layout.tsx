import React from "react";

export default function ServiceLayout({ children }: any) {
  return (
    <section>
      <div className="flex">
        <h2 className="text-blue-400 text-2xl">{children}</h2>
      </div>
    </section>
  );
}
