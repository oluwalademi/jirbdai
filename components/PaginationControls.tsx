"use client";

import { useRouter, useSearchParams } from "next/navigation";

const PaginationControls = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentLimit = searchParams.get("count");

  const handleClick = (limit: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("count", String(limit));
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-1 text-black/80">
      <span>limit per page:</span>
      {[1, 20, 50].map((num) => (
        <button
          key={num}
          onClick={() => handleClick(num)}
          className={`rounded px-2 py-1 font-numans ${
            currentLimit === String(num)
              ? "bg-curiousblue text-white"
              : "bg-gray-400 hover:bg-gray-300"
          }`}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default PaginationControls;
