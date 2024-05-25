import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/component/product-card";

export function CatalogLayout() {
    return (
        <section className="w-full pb-12 flex justify-center">
            <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                    <div className="grid gap-1">
                        <h1 className="text-2xl font-bold tracking-tight">Наши товары</h1>
                        <p className="text-gray-500 dark:text-gray-400">Выберите из широкого ассортимента наших товаров</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {
                        Array.of(...Array(10).keys()).map((item, index) =>  <ProductCard />)
                    }
                </div>
            </div>
        </section>
    )
}
