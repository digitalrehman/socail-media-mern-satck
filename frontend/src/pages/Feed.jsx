import React, { useEffect, useState } from "react";
import Stories from "../components/Stories";
import { dummyPostsData, dummyRecentMessagesData, assets } from "../assets/assets";
import FeedCard from "../components/FeedCard";
import moment from "moment";


const Feed = () => {
  let [feedData, setFeedData] = useState([]);

  useEffect(() => {
    setFeedData(dummyPostsData);
  }, []);

  return (
    <div className="flex justify-between max-w-310 mx-auto w-full gap-6">
      {/* left side  */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <Stories />
        <div className="flex p-2 flex-col gap-2 overflow-y-visible min-h-[calc(100vh-56px)]">
          {feedData.map((post) => (
            <FeedCard key={post._id} post={post} />
          ))}
        </div>
      </div>

      {/* right side */}
      <div className="w-[320px] shrink-0 hidden lg:block relative">
        <div className="fixed w-[320px] h-[calc(100vh-2rem)] overflow-y-auto pb-6 space-y-5 top-4 pr-1">
          {/* Sponsored */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4 font-sans">
            <h3 className="font-bold text-gray-900 text-[16px] tracking-wide">Sponsored</h3>
            <div className="w-full h-45 rounded-lg overflow-hidden bg-gray-50">
              <img 
                src={assets.sponsored_img} 
                alt="Email marketing" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="font-medium text-gray-800 text-[15px]">Email marketing</h4>
              <p className="text-[14px] text-gray-500 leading-relaxed pr-2">
                Supercharge your marketing with a powerful, easy-to-use platform built for results.
              </p>
            </div>
          </div>

          {/* Recent Messages */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 font-sans">
            <h3 className="font-bold text-gray-900 text-[16px] mb-5 tracking-wide">Recent Messages</h3>
            <div className="flex flex-col gap-5">
              {dummyRecentMessagesData.map((message) => (
                <div key={message._id} className="flex items-center gap-3 cursor-pointer group">
                  <img 
                    src={message.from_user_id.profile_picture} 
                    alt={message.from_user_id.full_name} 
                    className="w-12 h-12 rounded-full object-cover shadow-sm group-hover:opacity-90 transition-opacity" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[15px] text-gray-900 truncate tracking-tight">
                      {message.from_user_id.full_name}
                    </h4>
                    <p className={`text-[14px] truncate ${message.seen ? 'text-gray-500 font-normal' : 'text-gray-800 font-medium'}`}>
                      {message.text}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0 ml-1">
                    <span className="text-[12px] text-gray-400 whitespace-nowrap font-medium tracking-tight">
                      {moment(message.createdAt).fromNow()}
                    </span>
                    {!message.seen && (
                      <div className="bg-blue-600 text-white text-[11px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-sm">
                        1
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
