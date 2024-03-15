"use client";

import { useAuthModal } from "@/hooks/useAuthModal";
import { Modal } from "./Modal";
import { useRouter } from "next/navigation";

export const AuthModal = () => {
    const router = useRouter();
    const { close, isOpen } = useAuthModal();
    if (!isOpen) return null;

    return (
        <Modal title="Welcome back"
            description="Please login to continue"
            isOpen={isOpen}
            onChange={close}
        >
            <div>
                <button
                    onClick={() => {
                        console.log('Login with Google');
                    }}
                    className="w-full bg-white text-black py-3 rounded-md mb-3"
                >
                    Login with Google
                </button>
                <button
                    onClick={() => {
                        console.log('Login with Facebook');
                    }}
                    className="w-full bg-white text-black py-3 rounded-md"
                >
                    Login with Facebook
                </button>
            </div>
        </Modal>
    )
}