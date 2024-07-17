import React from 'react';
import '../assets/CSS/CommunityForum.css';

const demoData = [
  {
    id: 1,
    title: 'Preparing for Natural Disasters',
    description: 'Discuss tips and best practices for preparing for natural disasters such as hurricanes, earthquakes, and floods.',
    replies: 12,
    time: '2 hours ago',
    likes: 34,
  },
  {
    id: 2,
    title: 'Emergency Response Strategies',
    description: 'Share your experiences and strategies for effective emergency response during disasters.',
    replies: 8,
    time: '5 hours ago',
    likes: 20,
  },
  {
    id: 3,
    title: 'Community Support and Resources',
    description: 'Find and share resources available in your community to help during and after a disaster.',
    replies: 15,
    time: '1 day ago',
    likes: 45,
  },
];

const DiscussionForum = () => {
  return (
    <div className="discussion-forum">
      <h2>Discussion Forum</h2>
      <div className="topics-list">
        {demoData.map((topic) => (
          <div key={topic.id} className="topic-card">
            <h3 className="topic-title">{topic.title}</h3>
            <p className="topic-description">{topic.description}</p>
            <div className="topic-info">
              <span className="topic-time">{topic.time}</span>
              <span className="topic-likes">{topic.likes} likes</span>
              <span className="topic-replies">{topic.replies} replies</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionForum;
