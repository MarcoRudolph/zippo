type ThumbButtonsProps = {
  onLeftClick: () => void;
  onRightClick: () => void;
};

const ThumbButtons: React.FC<ThumbButtonsProps> = ({ onLeftClick, onRightClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-between p-4">
      <button onClick={onLeftClick} className="bg-blue-500 text-white p-4 rounded-full">Left</button>
      <button onClick={onRightClick} className="bg-blue-500 text-white p-4 rounded-full">Right</button>
    </div>
  );
};

export default ThumbButtons;
