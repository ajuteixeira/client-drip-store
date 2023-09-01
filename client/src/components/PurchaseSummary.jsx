import { useState } from "react"

import tenisProduto from "../assets/images/tenis_produto.svg"

export default function PurchaseSummary () {
    const [resumoCompra , setResumoCompra] = useState({
        titulo_produto : "Tênis Nike Revolution 6 Next Nature Masculino",
        img_produto : tenisProduto
    })

    return (
        <section className="flex flex-col space-y-2 py-3">
            <h2 className="tracking-wide font-semibold text-slate-700 text-lg">Resumo da Compra</h2>
            <div className="flex items-center justify-start">
                <img src={resumoCompra.img_produto} alt={resumoCompra.titulo_produto} />
                <p className="font-semibold text-slate-700">{resumoCompra.titulo_produto}</p>
            </div>
        </section>
    )
}