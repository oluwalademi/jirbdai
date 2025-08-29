"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { sortTypes } from "@/constants";
import { useState, useEffect } from "react";

const Sort = () => {
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const orderBy = searchParams.get("orderBy") || "datePublished";
  const orderDirection = searchParams.get("orderDirection") || "DESC";

  // Encode orderBy + orderDirection as a single string
  const currentSort = `${orderBy}:${orderDirection}`;
  const [selected, setSelected] = useState<string>(currentSort);

  useEffect(() => {
    setSelected(currentSort);
  }, [currentSort]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);

    // Decode value
    const [orderBy, orderDirection] = value.split(":");

    const params = new URLSearchParams(searchParams.toString());
    params.set("orderBy", orderBy);
    params.set("orderDirection", orderDirection);
    console.log(params, "params");

    router.push(`${path}?${params.toString()}`);
  };

  return (
    <div className="relative inline-block border-2  border-blue-400/50">
      <select
        defaultValue={`${sortTypes[0].orderBy}:${sortTypes[0].value}`}
        onChange={handleChange}
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-black shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {sortTypes.map((sort, i) => (
          <option key={i} value={`${sort.orderBy}:${sort.value}`}>
            {sort.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
