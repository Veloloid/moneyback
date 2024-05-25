import {Header} from "@/components/layout/header";
import {CheckoutForm} from "@/components/layout/checkout-form";

export default function Home() {
    return (
        <div className="h-screen bg-white">
            <Header />
            <CheckoutForm />
        </div>
    );
}
