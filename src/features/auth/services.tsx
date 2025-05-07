import { ServiceCards } from "@/components/serviceCards";
import { FC } from "react";

export const Services: FC = () => {

    const serviceCards = [
        {
            serviceTitle: "Fee Payment",
            imageUrl: "https://img.icons8.com/?size=100&id=0QFi8b60j26Q&format=png&color=000000"
        },
        {
            serviceTitle: "Utility Service",
            imageUrl: "https://img.icons8.com/?size=100&id=21235&format=png&color=000000"
        },
        {
            serviceTitle: "Pay TV",
            imageUrl: "https://img.icons8.com/?size=100&id=115361&format=png&color=000000"
        },
        {
            serviceTitle: "Invoice Service",
            imageUrl: "https://img.icons8.com/?size=100&id=jxOdkm8oaoZa&format=png&color=000000n"
        },
        {
            serviceTitle: "Voucher Service",
            imageUrl: "https://img.icons8.com/?size=100&id=49324&format=png&color=000000",
            btnType: "Details"
        },

    ]

    return(
        <>
        <div className="grid grid-cols-5 gap-5 ">       
            {serviceCards.map((card, index) => (
            <ServiceCards
                    key={index}
                    serviceTitle={card.serviceTitle}
                    imageUrl={card.imageUrl} btnType={"button"}            />
        ))}

        </div>
 
        </>
    );
}