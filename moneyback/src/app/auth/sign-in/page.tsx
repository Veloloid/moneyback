import {Header} from "@/components/layout/header";
import {SignInForm} from "@/components/layout/sign-in-form";

export default function Home() {
    return (
        <div className="h-screen bg-white">
            <Header />
            <SignInForm />
        </div>
    );
}
