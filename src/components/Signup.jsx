import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullname: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        agency: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { fullname, phone, email, password, agency } = formData;

        if (fullname && phone && email && password && agency) {
            navigate("/login");
        } else {
            alert("Please fill all required fields!");
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-gray-200 rounded-2xl shadow-lg w-full max-w-md h-screen flex flex-col justify-center px-8 py-10">
                <h2 className="text-2xl font-bold text-[#1D283A] mb-8 text-center">
                    Create your PopX account
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 justify-center">
                    <div className="relative">
                        <label
                            htmlFor="fullname"
                            className="absolute -top-2 left-4 bg-gray-200 px-2 text-sm font-bold text-[#0c55b5]"
                        >
                            Full Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            placeholder="Enter full name"
                            required
                            value={formData.fullname}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#6C25FF] "
                        />
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="phone"
                            className="absolute -top-2 left-4 bg-gray-200 px-2 text-sm font-bold text-[#0c55b5]"
                        >
                            Phone Number<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Enter phone number"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border  rounded-lg px-4 py-3 focus:outline-none focus:border-[#6C25FF] "
                        />
                    </div>
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
                            type="email"
                            placeholder="Enter email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border  rounded-lg px-4 py-3 focus:outline-none focus:border-[#6C25FF] "
                        />
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="absolute -top-2 left-4 bg-gray-200 px-2 text-sm font-bold text-[#0c55b5]"
                        >
                            Create Password<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border  rounded-lg px-4 py-3 focus:outline-none focus:border-[#6C25FF] "
                        />
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="company"
                            className="absolute -top-2 left-4 bg-gray-200 px-2 text-sm font-bold text-[#0c55b5]"
                        >
                            Company Name
                        </label>
                        <input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="Enter company name"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#6C25FF] "
                        />
                    </div>
                    <div>
                        <p className="text-sm text-black font-medium mb-2">
                            Are you an agency?<span className="text-red-500">*</span>
                        </p>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="agency"
                                    required
                                    value="yes"
                                    checked={formData.agency === "yes"}
                                    onChange={handleChange}
                                    className="accent-[#6C25FF]"
                                />
                                <span className="text-[#3E4C5E]">Yes</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="no"
                                    checked={formData.agency === "no"}
                                    onChange={handleChange}
                                    required
                                    className="accent-[#6C25FF]"
                                />
                                <span className="text-[#3E4C5E]">No</span>
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#6C25FF] text-white font-semibold py-3 rounded-lg w-full mt-4 hover:bg-[#5a1fd1] transition"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
