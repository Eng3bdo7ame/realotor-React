import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function WithGoogle() {

    const navigate = useNavigate();
    const signInWithGoogle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("Signed in successfully with Google");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                toast.error(`Error: ${errorMessage}`);
            });
    };

    return (
        <div>
            <button
                type="button"
                onClick={signInWithGoogle}
                className="w-full bg-red-500 text-white py-2 rounded mt-4 transition duration-200 ease-in-out hover:bg-red-600">
                <img className="w-6 h-6 inline mr-2 bg-white rounded-full " src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                Sign In with Google
            </button>
        </div>
    )
}
