import React, { useState, useRef } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';
import { dummyUserData } from '../assets/assets';

const CreateStoryModal = ({ isOpen, onClose }) => {
    const [storyText, setStoryText] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    if (!isOpen) return null;

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const handlePublish = () => {
        if (!storyText.trim() && !selectedImage) return;
        console.log("Publishing Story:", storyText, selectedImage);
        
        // Reset state and close
        setStoryText('');
        setSelectedImage(null);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div 
                className="bg-white rounded-2xl w-full max-w-md shadow-2xl relative flex flex-col overflow-hidden animate-in fade-in duration-200"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-100 p-4">
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">Create Story</h2>
                    <button 
                        onClick={onClose}
                        className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
                
                {/* Body */}
                <div className="p-5 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <img 
                            src={dummyUserData.profile_picture} 
                            alt={dummyUserData.full_name} 
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="font-semibold text-gray-900 text-[15px]">{dummyUserData.full_name}</span>
                    </div>

                    <textarea
                        className="w-full min-h-[140px] text-[16px] text-gray-900 placeholder-gray-400 outline-none resize-none bg-transparent"
                        placeholder="What's on your mind? Share a story..."
                        value={storyText}
                        onChange={(e) => setStoryText(e.target.value)}
                    />

                    {selectedImage && (
                        <div className="relative w-full h-48 rounded-xl overflow-hidden border border-gray-200 shadow-sm group bg-black">
                            <img 
                                src={URL.createObjectURL(selectedImage)} 
                                alt="Story Preview" 
                                className="w-full h-full object-contain" 
                            />
                            <button 
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 backdrop-blur-md"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 p-4 bg-gray-50 flex justify-between items-center">
                    <button 
                        onClick={() => fileInputRef.current.click()}
                        className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2"
                    >
                        <ImageIcon className="w-5 h-5" strokeWidth={1.5} />
                        <span className="text-sm font-medium">Add Media</span>
                    </button>
                    <input 
                        type="file" 
                        accept="image/*,video/*" 
                        className="hidden" 
                        ref={fileInputRef}
                        onChange={handleImageChange}
                    />
                    
                    <button 
                        onClick={handlePublish}
                        disabled={!storyText.trim() && !selectedImage}
                        className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all text-white ${
                            storyText.trim() || selectedImage
                            ? 'bg-linear-to-r from-indigo-950 to-indigo-800 hover:opacity-90 shadow-sm' 
                            : 'bg-indigo-950/50 cursor-not-allowed'
                        }`}
                    >
                        Publish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateStoryModal;
