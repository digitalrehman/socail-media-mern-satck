import React from "react";
import { Heart, MessageCircle, Share2, BadgeCheck } from "lucide-react";
import moment from "moment";



const FeedCard = ({ post }) => {
  const renderContent = (text) => {
    if (!text) return null;
    const words = text.split(/(\s+)/);
    return words.map((word, index) => {
      if (word.startsWith("#")) {
        return (
          <span key={index} className="text-blue-600">
            {word}
          </span>
        );
      }
      return word;
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm w-full font-sans">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={post?.user?.profile_picture}
          alt={post?.user?.full_name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center gap-1">
            <h3 className="font-semibold text-gray-900 text-[17px]">
              {post?.user?.full_name}
            </h3>
            {post?.user?.is_verified && (
              <BadgeCheck className="w-5 h-5 text-blue-500 fill-white" strokeWidth={1.5} />
            )}
          </div>
          <div className="text-[15px] text-gray-500 -mt-0.5">
            @{post?.user?.username} • {moment(post?.createdAt).fromNow()}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-gray-800 text-[16px] mb-4 whitespace-pre-wrap leading-relaxed">
        {renderContent(post?.content)}
      </div>

      {/* Media */}
      {post?.image_urls && post.image_urls.length > 0 && (
        <div className="mb-5">
          <img
            src={post.image_urls[0]}
            alt="Post content"
            className="w-full rounded-2xl border border-gray-100 object-cover max-h-[500px]"
          />
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center gap-6 text-gray-500 pt-4 border-t border-gray-200">
        <button className="flex items-center gap-2 hover:text-gray-700 transition-colors">
          <Heart className="w-[22px] h-[22px]" strokeWidth={1.5} />
          <span className="text-[15px] font-medium">
            {post?.likes_count?.length || 0}
          </span>
        </button>
        <button className="flex items-center gap-2 hover:text-gray-700 transition-colors">
          <MessageCircle className="w-[22px] h-[22px]" strokeWidth={1.5} />
          <span className="text-[15px] font-medium">12</span>
        </button>
        <button className="flex items-center gap-2 hover:text-gray-700 transition-colors">
          <Share2 className="w-[22px] h-[22px]" strokeWidth={1.5} />
          <span className="text-[15px] font-medium">7</span>
        </button>
      </div>
    </div>
  );
};

export default FeedCard;
