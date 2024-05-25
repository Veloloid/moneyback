import {Header} from "@/components/layout/header";
import {CatalogLayout} from "@/components/layout/catalog-layout";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <CatalogLayout />
        </div>
    );
}
