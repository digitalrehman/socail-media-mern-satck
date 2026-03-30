import React, { useEffect, useState } from 'react'
import { dummyStoriesData, dummyUserData } from '../assets/assets'
import { Plus } from 'lucide-react'
import CreateStoryModal from './CreateStoryModal'

const Stories = () => {
    const [stories, setStories] = useState([])
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

    useEffect(() => {
        setStories(dummyStoriesData)
    }, [])

    const getStoryBackground = (story) => {
        if (story.media_type === 'image') {
            return { backgroundImage: `url(${story.media_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }
        }
        if (story.media_type === 'video') {
            return { background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }
        }
        return { background: `linear-gradient(160deg, ${story.background_color}dd 0%, ${story.background_color}88 100%)` }
    }

    return (
        <div className='w-full py-4 px-2'>
            <div className='flex gap-2 overflow-x-auto pb-2' style={{ scrollbarWidth: 'none' }}>

                {/* Create Story Card */}
                <div
                    onClick={() => setIsCreateModalOpen(true)}
                    className='relative shrink-0 w-28 h-44 rounded-xl overflow-hidden cursor-pointer group shadow-md'
                    style={{ minWidth: '112px' }}
                >
                    {/* Profile photo as background (top 75%) */}
                    <div className='w-full h-3/4 overflow-hidden'>
                        <img
                            src={dummyUserData.profile_picture}
                            alt='Your photo'
                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                    </div>
                    {/* Bottom white section */}
                    <div className='absolute bottom-0 w-full h-1/3 bg-white dark:bg-gray-800 flex flex-col items-center justify-end pb-2'>
                        {/* Plus button overlapping */}
                        <div className='absolute -top-4 w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center shadow'>
                            <Plus size={16} color='white' strokeWidth={3} />
                        </div>
                        <p className='text-xs font-semibold text-gray-800 mt-2 text-center leading-tight'>Create Story</p>
                    </div>
                </div>

                {/* Story Cards */}
                {stories.map((story) => (
                    <div
                        key={story._id}
                        className='relative shrink-0 w-28 h-44 rounded-xl overflow-hidden cursor-pointer shadow-md group'
                        style={{ minWidth: '112px', ...getStoryBackground(story) }}
                    >
                        {/* Dark gradient overlay */}
                        <div className='absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60' />

                        {/* User Avatar with colored ring */}
                        <div className='absolute top-2 left-2 p-0.5 rounded-full bg-blue-500 ring-2 ring-blue-500 shadow'>
                            <img
                                src={story.user.profile_picture}
                                alt={story.user.full_name}
                                className='w-8 h-8 rounded-full object-cover border-2 border-white'
                            />
                        </div>

                        {/* Video icon overlay */}
                        {story.media_type === 'video' && (
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <div className='w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                                    <svg viewBox='0 0 24 24' fill='white' className='w-5 h-5 ml-0.5'>
                                        <path d='M8 5v14l11-7z' />
                                    </svg>
                                </div>
                            </div>
                        )}

                        {/* Text content for text stories */}
                        {story.media_type === 'text' && (
                            <div className='absolute inset-0 flex items-center justify-center px-2 pt-8'>
                                <p className='text-white text-[10px] font-semibold text-center leading-tight line-clamp-4 drop-shadow'>
                                    {story.content}
                                </p>
                            </div>
                        )}

                        {/* User name at bottom */}
                        <div className='absolute bottom-0 left-0 right-0 px-2 pb-2'>
                            <p className='text-white text-[11px] font-semibold leading-tight truncate drop-shadow-md'>
                                {story.user.full_name}
                            </p>
                        </div>

                        {/* Hover overlay */}
                        <div className='absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-200 rounded-xl' />
                    </div>
                ))}

            </div>
            
            <CreateStoryModal 
                isOpen={isCreateModalOpen} 
                onClose={() => setIsCreateModalOpen(false)} 
            />
        </div>
    )
}

export default Stories