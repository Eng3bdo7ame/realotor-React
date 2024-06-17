import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import TextField from "../componant/forms/TextField";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = formData;
    const [showPassword, setShowPassword] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
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
                        <button className="w-full bg-red-500 text-white py-2 rounded mt-4 transition duration-200 ease-in-out hover:bg-red-600">
                            <img className="w-6 h-6 inline mr-2 bg-white rounded-full " src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                            Sign In with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
