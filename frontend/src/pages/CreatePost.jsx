import React, { useState, useRef } from 'react';
import { dummyUserData } from '../assets/assets';
import { Image as ImageIcon, X } from 'lucide-react';

const CreatePost = () => {
    const [postText, setPostText] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const handlePublish = () => {
        if (!postText.trim() && !selectedImage) return;
        // Logic to publish post goes here
        console.log("Publishing:", postText, selectedImage);
        setPostText('');
        setSelectedImage(null);
    };

    return (
        <div className="p-4 md:p-8 md:pt-10 max-w-4xl h-full overflow-y-auto">
            <div className="mb-8">
                <h1 className="text-[32px] font-bold text-[#111827] mb-1.5 tracking-tight">Create Post</h1>
                <p className="text-[#6b7280] text-[16px]">Share your thoughts with the world</p>
            </div>

            <div className="bg-white rounded-[16px] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] border border-[#f3f4f6] p-6 md:p-8 max-w-[700px]">
                <div className="flex items-center gap-3.5 mb-8">
                    <img 
                        src={dummyUserData.profile_picture} 
                        alt={dummyUserData.full_name} 
                        className="w-[50px] h-[50px] rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-bold text-[#111827] text-[16px] leading-tight">{dummyUserData.full_name}</h3>
                        <p className="text-[#6b7280] text-[14.5px] mt-0.5">@{dummyUserData.username}</p>
                    </div>
                </div>

                <textarea
                    className="w-full min-h-[120px] mb-2 text-[16px] text-[#111827] placeholder-[#9ca3af] outline-none resize-none bg-transparent"
                    placeholder="What's happening?"
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                />

                {selectedImage && (
                    <div className="relative w-32 h-32 mb-4 rounded-xl overflow-hidden border border-[#e5e7eb] shadow-sm group">
                        <img 
                            src={URL.createObjectURL(selectedImage)} 
                            alt="Preview" 
                            className="w-full h-full object-cover" 
                        />
                        <button 
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-1.5 right-1.5 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 backdrop-blur-md"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>
                    </div>
                )}

                <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    ref={fileInputRef}
                    onChange={handleImageChange}
                />

                <div className="border-t border-[#e5e7eb] pt-4 mt-2 flex justify-between items-center w-full">
                    <button 
                        onClick={() => fileInputRef.current.click()}
                        className="text-[#6b7280] hover:text-[#4b5563] p-1.5 -ml-1.5 hover:bg-[#f3f4f6] rounded-lg transition-colors"
                    >
                            <ImageIcon className="w-[24px] h-[24px]" strokeWidth={1.5} />
                    </button>
                    
                    <button 
                        onClick={handlePublish}
                        className="px-6 py-2.5 rounded-[10px] font-semibold text-[14px] transition-all text-white bg-linear-to-r from-indigo-950 to-indigo-800 hover:opacity-90 shadow-sm"
                    >
                        Publish Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;