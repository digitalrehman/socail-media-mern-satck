import React, { useState } from 'react'
import { Users, UserPlus, UserCheck, Clock } from 'lucide-react'

const stats = [
  { label: 'Followers', count: 2 },
  { label: 'Following', count: 2 },
  { label: 'Pending', count: 1 },
  { label: 'Connections', count: 3 },
]

const tabs = [
  { label: 'Followers', icon: Users },
  { label: 'Following', icon: UserPlus },
  { label: 'Pending', icon: Clock },
  { label: 'Connections', icon: UserCheck },
]

const users = [
  {
    id: 1,
    name: 'Richard Hendricks',
    username: '@Richard Hendricks',
    bio: '🌍 Dreamer | 📚 Learner | 🚀 D...',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 2,
    name: 'Alexa james',
    username: '@alexa_james',
    bio: '🌍 Dreamer | 📚 Learner | 🚀 D...',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
]

const Connections = () => {
  const [activeTab, setActiveTab] = useState('Followers')
  const [selectedUser, setSelectedUser] = useState(1)

  return (
    <div className="min-h-screen bg-[#f0f2f5] px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-[#0f1b35] tracking-tight">Connections</h1>
        <p className="text-gray-500 mt-1 text-base">Manage your network and discover new connections</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 max-w-3xl mb-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-gray-200 py-4 px-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-200"
          >
            <span className="text-2xl font-bold text-[#0f1b35]">{stat.count}</span>
            <span className="text-gray-500 text-sm mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-gray-200 inline-flex items-center gap-1 px-2 py-2 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.label
          return (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 cursor-pointer ${
                isActive
                  ? 'text-[#0f1b35] font-semibold'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* User Cards Grid */}
      <div className="grid grid-cols-2 gap-5 max-w-3xl">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => setSelectedUser(user.id)}
            className={`bg-white rounded-2xl border-2 p-5 flex flex-col items-start gap-3 cursor-pointer transition-all duration-200 ${
              selectedUser === user.id
                ? 'border-blue-400 shadow-lg shadow-blue-100'
                : 'border-gray-100 hover:shadow-md'
            }`}
          >
            <div className="flex items-center gap-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-14 h-14 rounded-full object-cover shrink-0"
              />
              <div className="min-w-0">
                <h3 className="text-base font-bold text-[#0f1b35]">{user.name}</h3>
                <p className="text-blue-500 text-sm">{user.username}</p>
                <p className="text-gray-500 text-xs mt-0.5 truncate">{user.bio}</p>
              </div>
            </div>
            <button className="w-full py-2.5 rounded-lg bg-linear-to-r from-indigo-950 to-indigo-800 text-white text-sm font-semibold hover:from-indigo-900 hover:to-indigo-850 transition-all duration-200 cursor-pointer">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Connections