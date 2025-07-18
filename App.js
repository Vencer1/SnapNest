
// SnapNest - Youth-Friendly Social Media Website (React + Tailwind UI)
// FREE version MVP: Frontend-only, ideal for GitHub Pages or Vercel deploy

import React, { useState } from 'react';
import { MessageCircle, Video, Lock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SnapNestApp() {
  const [tab, setTab] = useState('feed');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4 font-sans">
      <header className="text-3xl font-bold text-center mb-6">SnapNest</header>

      <div className="flex justify-center gap-2 mb-4">
        <Tab label="Feed" active={tab === 'feed'} onClick={() => setTab('feed')} />
        <Tab label="Reels" active={tab === 'reels'} onClick={() => setTab('reels')} />
        <Tab label="Messages" active={tab === 'messages'} onClick={() => setTab('messages')} />
        <Tab label="Profile" active={tab === 'profile'} onClick={() => setTab('profile')} />
      </div>

      {tab === 'feed' && <Feed />}
      {tab === 'reels' && <Reels />}
      {tab === 'messages' && <Messages />}
      {tab === 'profile' && <Profile />}
    </div>
  );
}

function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl shadow-sm transition-all ${active ? 'bg-white text-indigo-600 font-semibold' : 'bg-indigo-100 text-indigo-800'}`}
    >
      {label}
    </button>
  );
}

function Feed() {
  return (
    <div className="space-y-4 mt-4">
      <Post username="emma_youth" content="🌸 First day of school vibes!" />
      <Post username="techfan23" content="Built my first robot in class today 🤖" />
    </div>
  );
}

function Post({ username, content }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md">
      <p className="font-semibold text-indigo-700">@{username}</p>
      <p className="text-gray-700 mt-2">{content}</p>
    </div>
  );
}

function Reels() {
  return (
    <div className="grid gap-4 mt-4">
      <VideoCard title="Dance Challenge 💃" />
      <VideoCard title="My Coding Project Showcase 🧑‍💻" />
    </div>
  );
}

function VideoCard({ title }) {
  return (
    <motion.div className="bg-white p-4 rounded-2xl shadow-md" whileHover={{ scale: 1.03 }}>
      <div className="flex items-center justify-between">
        <p className="font-medium">{title}</p>
        <Video className="w-5 h-5 text-gray-500" />
      </div>
      <p className="text-sm text-gray-400 mt-1">Max 60s • Reviewed</p>
    </motion.div>
  );
}

function Messages() {
  const [msg, setMsg] = useState('');
  const [chat, setChat] = useState([
    { sender: 'them', text: 'Hey! Did you finish the design challenge?' },
    { sender: 'me', text: "Yeah! I'll share it here." }
  ]);

  const sendMsg = () => {
    if (!msg.trim()) return;
    setChat([...chat, { sender: 'me', text: msg }]);
    setMsg('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 max-w-xl mx-auto">
      <h3 className="font-semibold text-lg mb-2">Chat with @charlie_dev</h3>
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {chat.map((c, i) => (
          <div key={i} className={`p-2 rounded-xl text-sm w-fit ${c.sender === 'me' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'}`}>{c.text}</div>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded-xl text-sm"
          placeholder="Type a message..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button onClick={sendMsg} className="p-2 bg-indigo-500 text-white rounded-xl">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mt-4 max-w-xl mx-auto">
      <h3 className="text-lg font-semibold">@my_profile</h3>
      <p className="text-sm text-gray-500">Youth Creator | Coding | Art</p>
      <div className="mt-4 space-y-2">
        <button className="w-full py-2 bg-indigo-100 rounded-xl">Edit Profile</button>
        <button className="w-full py-2 flex items-center justify-center gap-2 bg-gray-100 rounded-xl">
          <Lock className="w-4 h-4" /> Privacy Settings
        </button>
      </div>
    </div>
  );
}
