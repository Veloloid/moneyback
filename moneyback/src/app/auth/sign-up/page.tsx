import {Header} from "@/components/layout/header";
import {SignUpFrom} from "@/components/layout/sign-up-from";

export default function Home() {
    return (
        <div className="h-screen bg-white">
            <Header />
            <SignUpFrom />
        </div>
    );
}
