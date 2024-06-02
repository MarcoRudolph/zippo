type MenuBarProps = {
  items: string[];
  onItemClick: (item: string) => void;
};

const MenuBar: React.FC<MenuBarProps> = ({ items, onItemClick }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-around">
      {items.map((item, index) => (
        <button key={index} onClick={() => onItemClick(item)}>{item}</button>
      ))}
    </div>
  );
};

export default MenuBar;
