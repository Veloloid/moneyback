"use client"

import React, {SVGProps} from 'react';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {clsx} from "clsx";

function jwt(): string {
    return localStorage.getItem("jwt") || ""
}

const ProfileButton = () => {
    const router = useRouter();

    return (
        <Button
            onClick={() => router.push("/auth/sign-in")}
            className={clsx("rounded-full text-white", jwt() ? "bg-white" : "bg-blue-500")}
            size="icon" variant="outline"
        >
            <UserIcon className="h-4 w-4" />
            <span className="sr-only">Личный кабинет</span>
        </Button>
    );
};

export default ProfileButton;

function UserIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}
