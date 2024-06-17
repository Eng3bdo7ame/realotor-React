import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import TextField from "../componant/forms/TextField";
import WithGoogle from "../componant/WithGoogle";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, Zoom, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import db from "../firebase";


export default function SignUp() {

    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = formData;
    const [showPassword, setShowPassword] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !password) {
            toast.error("All fields are required");
            return;
        }

        if (password.length < 8) {
            toast.error("Password must be at least 8 characters long");
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must contain at least one uppercase letter, one lowercase letter, and one number");
            return;
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                toast.warn(`Error: ${errorMessage}`);
            });
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        console.log(formData);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Zoom}
            />
            <h1 className="text-3xl font-bold text-center mt-6">Sign Up</h1>
            <div className="flex justify-center flex-wrap items-center px-6 py-12 mx-auto">
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img
                        className="w-full rounded-2xl"
                        src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Key"
                    />
                </div>
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            type="text"
                            placeholder="Full Name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                        <TextField
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                        <div className="relative w-full">
                            <TextField
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                            <div className="absolute inset-y-3 right-3 flex">
                                <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye}
                                    className="cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                            <p className="mb-6 text-gray-600">
                                {" "}
                                Already have an account?{" "}
                                <Link
                                    className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                                    to="/signin">
                                    {" "}
                                    Sign In{" "}
                                </Link>{" "}
                            </p>
                            <Link
                                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                                to="/forgot-password">
                                {" "}
                                Forgot Password{" "}
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded mt-4 transition duration-200 ease-in-out hover:bg-blue-600 ">
                            Sign Up
                        </button>
                        <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                            <p className="mx-4 text-center font-semibold "> OR </p>
                        </div>
                        <WithGoogle />
                    </form>
                </div>
            </div>
        </div>
    );
}
