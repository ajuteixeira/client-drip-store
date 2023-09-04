import { useState } from "react"

export default function PurchaseTotal () {
    const [totalCompra , settotalCompra] = useState({
        total : 219,
        parcela : 21,
    });

    return (
        <section className="flex justify-between rounded bg-orange-300/10 border-orange-300 py-5 px-3"> 
            <h2 className="text-3xl">Total</h2>
            <div className="flex flex-col items-end">
                <h2 className="font-semibold text-3xl">
                    R$ {totalCompra.total},00
                </h2>
                <span className="text-slate-400">ou 10x de R$ {totalCompra.parcela},00 sem juros</span>
            </div>
        </section>
    )
}