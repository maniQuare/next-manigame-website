"use clinet";

import { RxComponent1 } from "react-icons/rx";
import { Button } from "@/components/ui/button";

export default function GameList() {
  const GameList = [
    { name: "Lottery", src: "./game-list/1L.png" },
    { name: "", src: "./game-list/2E.png"  },
    { name: "Aviator", src: "./game-list/3A.png" },
    { name: "JDB", src: "./game-list/4J.png" },
    { name: "Mines", src: "./game-list/5M.png" },
    { name: "Popular", src: "./game-list/6P.png" },
    { name: "Solt", src: "./game-list/7S.png" },
    { name: "Fishing", src: "./game-list/8F.png" },
    { name: "Card",src: "./game-list/9T.png" },
    { name: "Bingo", src: "./game-list/10B.png" },
    { name: "Casino", src: "./game-list/11C.png" },
  ];

  const GameItems = [
    {
      name: "Win Go",
      txt1: "Guess Number",
      txt2: "Green/Red/Violet to ",
      src: "./game-logo/Win.png",
    },
    {
      name: "K3",
      txt1: "Guess Number",
      txt2: "Small/Big/Odd/Even ",
     src: "./game-logo/K3.png",
    },
    {
      name: "Trx Win",
      txt1: "Guess Number",
      txt2: "Small/Big/Odd/Even ",
      src: "./game-logo/Trx.png",
    },
    {
      name: "5D",
      txt1: "Guess Number",
      txt2: "Small/Big/Odd/Even ",
      src: "./game-logo/5D.png",
    },
  ];

  return (
    <div className="flex flex-row">
      <div className="basis-1/3">
        <div className=" text-white ">
          {GameList.map((data) => (
            <div
              key={data.name}
              className="ml-2 w-19 h-21  rounded-r-2xl bg-black my-2 mt-4"
            >
              <div className="pt-2">
                <div className="flex justify-center"> <img src={data.src} className="w-16" alt="" /> </div>
                
                <p className="text-xs flex  justify-center mt-1  font-sans">{data.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="basis-3/3">
        <div className="  sticky top-40   text-white">
          {GameItems.map((items) => (
            <div
              key={items.name}
              className="bg-gray-600 my-4 h-24 rounded-2xl mr-2 "
            >
              <div className="flex">
                
                
                <div className="p-4.5  text-[12px]">
                  <h1 className="text-xl font-semibold">{items.name}</h1>
                  <p className="text-gray-300">{items.txt1}</p>
                  <p className="text-gray-300">{items.txt2}</p>{" "}
                </div>
                <div ><img src={items.src} className=" ml-4  w-25 flex justify-end" alt="" /> </div>
              </div>
            </div>
          ))}
          <div>
            <div className="mr-2 border-1 rounded-2xl">
              <Button className="rounded-2xl w-full h-12 ">
                <RxComponent1 /> View All{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
