import React, { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={cn(
        "text-primary border-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 uppercase",
        className,
      )}
      {...otherProps}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
}
