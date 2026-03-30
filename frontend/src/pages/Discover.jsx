import React, { useState } from 'react'
import { Search, MapPin, UserPlus, UserCheck, Plus, MessageCircle } from 'lucide-react'
import { dummyConnectionsData } from '../assets/assets'

const Discover = () => {
    const [searchQuery, setSearchQuery] = useState('')

    // Just to simulate the UI state from the image
    const isFollowing = (user) => user.username !== 'john_warren'

    const filteredUsers = dummyConnectionsData.filter((user) => {
        if (!searchQuery.trim()) return true;
        const query = searchQuery.toLowerCase();
        return (
            user.full_name?.toLowerCase().includes(query) ||
            user.username?.toLowerCase().includes(query) ||
            user.bio?.toLowerCase().includes(query) ||
            user.location?.toLowerCase().includes(query)
        );
    });

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto h-full overflow-y-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#111827] mb-2 tracking-tight">Discover People</h1>
                <p className="text-[#6b7280]">Connect with amazing people and grow your network</p>
            </div>

            <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-[#9ca3af]" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-11 pr-4 py-3 border border-[#d1d5db] rounded-lg text-sm bg-white focus:outline-none focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800 transition-colors"
                    placeholder="Search people by name, username, bio, or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUsers.map((user) => {
                    const following = isFollowing(user)

                    return (
                        <div key={user._id} className="bg-white border border-[#e5e7eb] rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                            <img
                                src={user.profile_picture}
                                alt={user.full_name}
                                className="w-20 h-20 rounded-full object-cover mb-4 shadow-sm"
                            />
                            <h3 className="font-bold text-[#111827] text-[17px] mb-0.5">{user.full_name}</h3>
                            <p className="text-[#9ca3af] text-[13px] mb-4">@{user.username}</p>
                            
                            <p className="text-[13px] text-[#4b5563] mb-5 whitespace-pre-line leading-relaxed px-2">
                                {user.bio}
                            </p>

                            <div className="flex gap-2.5 justify-center mb-6 w-full">
                                <div className="flex items-center gap-1.5 border border-[#e5e7eb] rounded-full px-3.5 py-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-[#6b7280]" />
                                    <span className="text-[12px] text-[#4b5563] font-medium">{user.location}</span>
                                </div>
                                <div className="border border-[#e5e7eb] rounded-full px-3.5 py-1.5 flex items-center">
                                    <span className="text-[12px] text-[#4b5563] font-medium">{user.followers?.length || 0} Followers</span>
                                </div>
                            </div>

                            <div className="flex gap-2 w-full mt-auto">
                                <button className="flex-1 py-2 rounded-lg font-medium flex justify-center items-center gap-2 text-sm transition-all text-white bg-linear-to-r from-indigo-950 to-indigo-800 hover:opacity-90">
                                    {following ? (
                                        <>
                                            <UserCheck className="w-4 h-4" />
                                            Following
                                        </>
                                    ) : (
                                        <>
                                            <UserPlus className="w-4 h-4" />
                                            Follow
                                        </>
                                    )}
                                </button>
                                <button className="p-2.5 border border-[#d1d5db] rounded-lg text-[#6b7280] hover:bg-[#f9fafb] flex items-center justify-center transition-colors">
                                    {following ? (
                                        <MessageCircle className="w-5 h-5" />
                                    ) : (
                                        <Plus className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

            {filteredUsers.length === 0 && (
                <div className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm mt-8">
                    <p className="text-gray-500 text-[15px]">No people found matching "{searchQuery}"</p>
                </div>
            )}
        </div>
    )
}

export default Discover