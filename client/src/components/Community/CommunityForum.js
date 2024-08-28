import React, { useState } from 'react';
import '../../assets/CSS/CommunityForum.css';

const demoData = [
  {
    id: 1,
    title: 'Open fire takes place in Ajampur,Uttara',
    description: 'Police is firing at the students',
    time: '2023-07-18 11:30',
    likes: 34,
  },
  {
    id: 2,
    title: 'BRACU students are attacked by Police',
    description: 'Tear shells, grenade and rubber bullets are being fired at BRACU students. Their ambulance driver is shot dead',
    time: '2023-07-18 11:50',
    likes: 20,
  },
  {
    id: 3,
    title: 'Raid at DU halls',
    description: `Police and BSL are taking control of the Dhaka University halls. 
    Police is firing rubber bullets and using smoke grenade, stunt grenade and tear shells.`,
    time: '2023-07-17 18:00',
    likes: 45,
  },
];

const CommunityForum = () => {
  const [topics, setTopics] = useState(demoData);

  const handleLike = (id)=> {
    const updatedTopics = topics.map((topic) => {
      if (topic.id === id) {
        return { ...topic, likes: topic.likes + 1 };
      }
      return topic;
    });
    setTopics(updatedTopics);
  };

  return (
    <div className="discussion-forum">
      <h2>Discussion Forum</h2>
      <div className="topics-list">
        {
            topics.map((topic) => (
            <div key={topic.id} className="topic-card">
                <h3 className="topic-title">{topic.title}</h3>
                <p className="topic-description">{topic.description}</p>
                <div className="topic-info">
                <button className="like-button" onClick={() => handleLike(topic.id)}>
                    Like {topic.likes}
                </button>
                <span className="topic-time">{new Date(topic.time).toLocaleString()}</span>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export {CommunityForum};
