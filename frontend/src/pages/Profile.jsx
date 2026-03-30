import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyUserData, dummyPostsData } from '../assets/assets';
import { BadgeCheck, MapPin, Calendar, Edit } from 'lucide-react';
import FeedCard from '../components/FeedCard';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('Posts');
    const navigate = useNavigate();
    const userPosts = dummyPostsData.filter(post => post.user._id === dummyUserData._id);

    return (
        <div className="max-w-3xl mx-auto py-8 px-4 h-full overflow-y-auto">
            {/* Profile Info Card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] flex flex-col mb-6 pb-2">
                {/* Cover Photo */}
                <div className="h-48 rounded-t-2xl bg-linear-to-r from-blue-200 via-indigo-100 to-pink-200 w-full"></div>
                
                <div className="px-8 flex flex-col relative w-full">
                    {/* Avatar and Edit Button Row */}
                    <div className="flex justify-between items-start w-full">
                        <div className="-mt-18">
                            <img 
                                src={dummyUserData.profile_picture} 
                                alt={dummyUserData.full_name} 
                                className="w-[130px] h-[130px] rounded-full object-cover border-[5px] border-white bg-white"
                            />
                        </div>
                        <button 
                            onClick={() => navigate('/edit-profile')}
                            className="mt-4 px-4 py-1.5 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 flex items-center gap-1.5 hover:bg-gray-50 transition-colors"
                        >
                            <Edit className="w-[14px] h-[14px]" strokeWidth={2} />
                            Edit
                        </button>
                    </div>

                    {/* User Details */}
                    <div className="mt-2.5">
                        <div className="flex items-center gap-1.5">
                            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{dummyUserData.full_name}</h1>
                            {dummyUserData.is_verified && (
                                <BadgeCheck className="w-5 h-5 text-blue-500 fill-white" />
                            )}
                        </div>
                        <p className="text-gray-500 text-[15px] -mt-0.5">@{dummyUserData.username}</p>
                    </div>

                    {/* Bio */}
                    <div className="mt-4 text-gray-600 text-[14px] whitespace-pre-line leading-relaxed">
                        {dummyUserData.bio}
                    </div>

                    {/* Meta Info (Location & Join Date) */}
                    <div className="flex items-center gap-6 mt-4 text-[13px] text-gray-500">
                        <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            <span>{dummyUserData.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span>Joined 16 days ago</span>
                        </div>
                    </div>

                    {/* Stats Divider & Row */}
                    <div className="border-t border-gray-100 mt-6 pt-5 pb-5 flex items-center gap-8">
                        <div className="flex items-baseline gap-1.5">
                            <span className="font-bold text-gray-900 text-[17px]">{userPosts.length}</span>
                            <span className="text-gray-500 text-[14px]">Posts</span>
                        </div>
                        <div className="flex items-baseline gap-1.5">
                            <span className="font-bold text-gray-900 text-[17px]">{dummyUserData.followers.length}</span>
                            <span className="text-gray-500 text-[14px]">Followers</span>
                        </div>
                        <div className="flex items-baseline gap-1.5">
                            <span className="font-bold text-gray-900 text-[17px]">{dummyUserData.following.length}</span>
                            <span className="text-gray-500 text-[14px]">Following</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-[14px] border border-gray-200 p-1.5 flex shadow-sm mb-6 max-w-[500px] mx-auto">
                {['Posts', 'Media', 'Likes'].map((tab) => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-1.5 text-center text-sm font-semibold rounded-[10px] transition-colors ${
                            activeTab === tab 
                            ? 'bg-indigo-950 text-white shadow-sm' 
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="space-y-5">
                {activeTab === 'Posts' && userPosts.map((post) => (
                    <FeedCard key={post._id} post={post} />
                ))}
                
                {activeTab === 'Media' && (
                    <div className="text-center py-10 text-gray-500 bg-white rounded-2xl border border-gray-200">
                        No media available.
                    </div>
                )}
                
                {activeTab === 'Likes' && (
                    <div className="text-center py-10 text-gray-500 bg-white rounded-2xl border border-gray-200">
                        No liked posts yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;