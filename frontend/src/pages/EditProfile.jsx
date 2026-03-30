import React, { useState } from 'react';
import { dummyUserData } from '../assets/assets';

const EditProfile = () => {
    const [formData, setFormData] = useState({
        full_name: dummyUserData.full_name,
        username: dummyUserData.username,
        bio: dummyUserData.bio,
        location: dummyUserData.location,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        console.log("Saving new profile data:", formData);
        // Note: In a real app, you would submit this to your backend
    };

    return (
        <div className="p-4 md:p-8 max-w-3xl mx-auto h-full overflow-y-auto">
            <div className="mb-8">
                <h1 className="text-[32px] font-bold text-[#111827] mb-1.5 tracking-tight">Edit Profile</h1>
                <p className="text-[#6b7280] text-[16px]">Update your personal information</p>
            </div>

            <div className="bg-white rounded-[16px] shadow-sm border border-[#f3f4f6] p-6 md:p-8">
                <form onSubmit={handleSave} className="flex flex-col gap-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                        <input
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-[#d1d5db] rounded-lg text-sm bg-white focus:outline-none focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800 transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-[#d1d5db] rounded-lg text-sm bg-white focus:outline-none focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800 transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Bio</label>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-3 border border-[#d1d5db] rounded-lg text-sm bg-white focus:outline-none focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800 transition-colors resize-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-[#d1d5db] rounded-lg text-sm bg-white focus:outline-none focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800 transition-colors"
                        />
                    </div>

                    <div className="pt-5 mt-2 border-t border-gray-100 flex justify-end gap-3">
                        <button 
                            type="button"
                            onClick={() => window.history.back()}
                            className="px-6 py-2.5 rounded-[10px] font-semibold text-[14px] border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="px-6 py-2.5 rounded-[10px] font-semibold text-[14px] transition-all text-white bg-linear-to-r from-indigo-950 to-indigo-800 hover:opacity-90 shadow-sm"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
