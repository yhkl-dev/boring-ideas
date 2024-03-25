// pages/ideas.tsx
import { useEffect, useState } from 'react';

interface Idea {
  _id: string;
  title: string;
  description: string;
}

const IdeasPage = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const response = await fetch('/api/ideas');
      const data = await response.json();
      if (data.success) {
        setIdeas(data.data);
      }
    };

    fetchIdeas();
  }, []);

  return (
    <div>
      <h1>想法列表</h1>
      <ul>
        {ideas.map((idea) => (
          <li key={idea._id}>
            <h2>{idea.title}</h2>
            <p>{idea.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IdeasPage;