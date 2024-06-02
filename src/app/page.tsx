import ThumbButtons from './components/ThumbButtons';
import MenuBar from './components/MenuBar';
import { useState } from 'react';

const Home: React.FC = () => {
  const [position, setPosition] = useState(0);
  const items = ["Item 1", "Item 2", "Item 3"];

  const handleLeftClick = () => {
    setPosition(position - 10);
  };

  const handleRightClick = () => {
    setPosition(position + 10);
  };

  const handleItemClick = (item: string) => {
    alert(`You clicked on ${item}`);
  };

  return (
    <div className="relative h-screen bg-green-200">
      <MenuBar items={items} onItemClick={handleItemClick} />
      <div className="absolute" style={{ left: `${position}px` }}>
        <img src="/path-to-guinea-pig-image.png" alt="Guinea Pig" />
      </div>
      <ThumbButtons onLeftClick={handleLeftClick} onRightClick={handleRightClick} />
    </div>
  );
};

export default Home;
