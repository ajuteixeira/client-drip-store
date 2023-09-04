import ButtonPrint from "./ButtonPrint";
import ButtonBackHome from "./ButtonBackHome";
import HeaderPurchase from "./HeaderPurchase";
import InfoDelivery from "./InfoDelivery";
import InfoPurchase from "./InfoPurchase";
import InfoPersonPurchase from "./InfoPersonPurchase";
import Line from "./Line";
import PurchaseSummary from "./PurchaseSummary";
import PurchaseTotal from "./PurchaseTotal";

export default function ContainerPurchase () {
    return (
        <>
            <section className="rounded flex flex-col justify-center px-10 py-6 my-6 bg-slate-50 w-[768px] mx-auto">
                <HeaderPurchase />
                <Line />
                <InfoPersonPurchase />
                <Line />
                <InfoDelivery />
                <Line />
                <InfoPurchase />
                <Line />
                <PurchaseSummary />
                <PurchaseTotal />
                <ButtonPrint />
            </section>
            <ButtonBackHome />
        </>
    )
}