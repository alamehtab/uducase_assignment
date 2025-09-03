import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate=useNavigate()
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-gray-200 rounded-2xl shadow-lg w-full max-w-md   px-10 h-screen py-16 flex flex-col items-start justify-end">
                <h1 className="text-2xl font-bold text-[#1D283A] mb-3 text-center">
                    Welcome to PopX
                </h1>
                <p className="text-base text-[#3E4C5E] mb-8 text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                </p>
                <div className="flex flex-col gap-4 w-full">
                    <button onClick={()=>navigate('/signup')} className="bg-[#6C25FF] text-white font-semibold py-3 rounded-lg w-full hover:bg-[#5a1fd1] transition">
                        Create Account
                    </button>
                    <button onClick={()=>navigate('/login')} className="border border-[#6C25FF] text-[#6C25FF] font-semibold py-3 rounded-lg w-full hover:bg-[#f3f0ff] transition">
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;