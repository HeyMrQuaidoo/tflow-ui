import { ServiceCardsProps } from "@/interfaces";
import { FC } from "react";

export const ServiceCards: FC<ServiceCardsProps> = ({ serviceTitle, imageUrl }) => {
    return(<>
    <div className="border-[#162667]  border-solid border-[2px] bg-opacity-20 p-8 rounded-xl flex justify-center items-center">
  <div className="flex flex-col items-center text-center">
    <h2 className="font-semibold mb-4">{serviceTitle}</h2>

    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
      className="w-[80px] h-[80px] mb-4"
    ></div>

    {/* <button className="text-gray-700 p-2 text-sm px-5 bg-white rounded">
      {btnType}
    </button> */}
  </div>
</div>

        </>
    );
}
