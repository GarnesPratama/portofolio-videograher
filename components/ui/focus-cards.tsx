import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Card Component
export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <a href={`/all-project/${card?.documentId}`}>
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={card?.src}
          alt={card?.title}
          fill
          unoptimized
          className="object-cover absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card?.title}
          </div>
        </div>
      </div>
    </a>
  )
);

Card.displayName = "Card";

export function FocusCards({
  cards,
}: {
  cards: { title: string; src: string; documentId: string }[];
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  const cardPairs = [];
  for (let i = 0; i < cards?.length; i += 2) {
    cardPairs.push(cards.slice(i, i + 2));
  }

  return (
    <div className="w-full grid grid-cols-1 gap-4 md:gap-7 px-5 md:px-7 md:py-3 py-2">
      {cards?.length === 0 ? (
        <div className="text-center text-gray-500 text-lg font-medium lg:py-10 md:py-5 py-3">
          Data not found
        </div>
      ) : cards?.length === 1 ? (
        <div className="w-full md:w-2/5 mx-auto">
          <Card
            card={cards[0]}
            index={0}
            hovered={hovered}
            setHovered={setHovered}
          />
        </div>
      ) : (
        cardPairs?.map((pair, index) => (
          <div key={index} className="w-full flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-2/5">
              <Card
                card={pair[0]}
                index={index * 2}
                hovered={hovered}
                setHovered={setHovered}
              />
            </div>

            {pair[1] && (
              <div className="w-full md:w-3/5">
                <Card
                  card={pair[1]}
                  index={index * 2 + 1}
                  hovered={hovered}
                  setHovered={setHovered}
                />
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
