import React from 'react'
import { MessageSquare, Eye } from 'lucide-react'

const users = [
  {
    id: 1,
    name: 'John Warren',
    username: '@john_warren',
    bio: '🌍 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time. ✨\nStaying curious. Creating with purpose.',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: 2,
    name: 'Richard Hendricks',
    username: '@Richard Hendricks',
    bio: '🌍 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time. ✨\nStaying curious. Creating with purpose.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 3,
    name: 'Alexa james',
    username: '@alexa_james',
    bio: '🌍 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time. ✨\nStaying curious. Creating with purpose.',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
]

const Messages = () => {
  return (
    <div className="min-h-screen bg-[#f0f2f5] px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-[#0f1b35] tracking-tight">Messages</h1>
        <p className="text-gray-500 mt-1 text-base">Talk to your friends and family</p>
      </div>

      {/* User Cards */}
      <div className="flex flex-col gap-4 max-w-3xl">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-5 flex items-start gap-5 hover:shadow-md transition-shadow duration-200"
          >
            {/* Avatar */}
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover shrink-0"
            />

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold text-[#0f1b35]">{user.name}</h2>
              <p className="text-blue-500 text-sm font-medium">{user.username}</p>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed whitespace-pre-line">
                {user.bio}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 shrink-0">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-500 transition-colors duration-150"
                title="Message"
              >
                <MessageSquare size={18} />
              </button>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-500 transition-colors duration-150"
                title="View Profile"
              >
                <Eye size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Messages