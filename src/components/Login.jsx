import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = formData;

        // check required fields
        if (email && password) {
            navigate("/profile");
        } else {
            alert("Please fill all required fields!");
        }
    };
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center ">
                <div className="bg-gray-200 rounded-2xl shadow-lg w-full max-w-md h-screen flex flex-col justify-self-start px-8 py-10">
                    <h2 className="text-2xl font-bold text-[#1D283A] mb-8 text-start">
                        SignIn to your PopX account
                    </h2>
                    <p className="font-medium text-gray-500 mb-8 text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, iure aperiam dignissimos praesentium at non quo. Accusantium </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 justify-start">
                        {/* Full Name */}
                        <div className="relative">
                            <label
                                htmlFor="email"
                                className="absolute -top-2 left-4 bg-gray-200 px-2 text-sm font-bold text-[#0c55b5]"
                            >
                                Email Address<span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Enter Your Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#6C25FF] "
                            />
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <label
                                htmlFor="password"
                                className="absolute -top-2 left-4 bg-gray-200 px-2 text-sm font-bold text-[#0c55b5]"
                            >
                                password<span className="text-red-500">*</span>
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter Your Password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full border  rounded-lg px-4 py-3 focus:outline-none focus:border-[#6C25FF] "
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#6C25FF] text-white font-semibold py-3 rounded-lg w-full mt-4 hover:bg-[#5a1fd1] transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login