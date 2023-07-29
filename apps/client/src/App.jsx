import { useEffect, useState } from 'react';
import './App.css';

import Techs from './Techs';
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tech, setTech] = useState('');

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const technologies = [
    { id: 1, name: 'aws' },
    { id: 2, name: 'google cloud' },
    { id: 4, name: 'azure' },
    { id: 3, name: 'terraform' },
    { id: 5, name: 'docker' },
    { id: 6, name: 'kubernetes' },
    { id: 7, name: 'jenkins' },
    { id: 8, name: 'serverless' },
  ];

  useEffect(() => {
    setTech();
  }, [isModalOpen]);

  return (
    <>
      <h2 style={{ marginBottom: 50 }}>Hello Cloud</h2>
      <div className="container">
        {technologies.map((tech) => (
          <Techs
            tech={tech}
            key={tech.id}
            setTech={setTech}
            setIsModalOpen={handleModal}
          />
        ))}
        {isModalOpen && <Modal tech={tech} setIsModalOpen={setIsModalOpen} />}
      </div>
    </>
  );
}

export default App;
