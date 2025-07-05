"use client";

import React from "react";

type Props = {
  height: number;
  color?: string;
};

const Offset = ({ height, color }: Props) => {
  return <div className={color} style={{ height: `${height}px` }}></div>;
};

export default Offset;
