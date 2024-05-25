import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";

const ProductCard = () => {
    return (
        <div className="grid gap-4">
            <div className="grid gap-2.5 relative group">
                <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">Просмотреть</span>
                </Link>
                <img
                    alt="Футболка"
                    className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                    height="300"
                    src="/placeholder.svg"
                    width="300"
                />
                <div className="grid gap-1">
                    <div className="flex items-center gap-4">
                        <h3 className="font-semibold">Футболка</h3>
                        <h4 className="font-semibold ml-auto">$29.99</h4>
                    </div>
                    <p className="text-sm leading-none">Мягкая и комфортная футболка</p>
                </div>
            </div>
            <Button className="w-full" variant="outline">
                Добавить в корзину
            </Button>
        </div>
    );
};

export default ProductCard;