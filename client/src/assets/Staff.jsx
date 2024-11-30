// export default StaffLoginPage;
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigate hook
import axios from "axios";

function StaffLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessageClient, setErrorMessage] = useState("");
    const navigate = useNavigate(); // Initialize navigate

    function staffCheckIn(event) {
        event.preventDefault();
        axios.post("http://localhost:5000/admin/login", { email, password })
            .then((response) => {
                const { message, redirectPath, errorMessage } = response.data;

                if (errorMessage) {
                    console.log("Error message received:", errorMessage);
                    setErrorMessage(errorMessage);
                } else if (redirectPath) {
                    console.log("Redirecting to:", redirectPath);
                    navigate(redirectPath); // Use navigate to redirect
                } else {
                    console.log("No redirect path or error. Clearing messages.");
                    setErrorMessage(""); // Clear any previous errors
                }
            })
            .catch((error) => {
                console.error("Error from server:", error.response ? error.response.data : error.message);
            });
    }

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="./src/assets/softcloud4.png"
                        alt="softcloud logo"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                        Sign in to your Admin panel
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={staffCheckIn} className="space-y-6" method="POST">
                        <span className="bg-red-100 p-4">{errorMessageClient} </span><br />
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                    onChange={ev=>setEmail(ev.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-900"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                    onChange={ev=>setPassword(ev.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{" "}
                        <a
                            href="#"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default StaffLoginPage;
