import { Button } from "react-bootstrap";
import "./ProductCards.css";
function TabButton({ children, onSelect, isActive }) {
  return (
    <li>
      <Button
        onClick={onSelect}
        className={`btn-rounded wide ${isActive ? "active shadow-transition" : ""}`}
        variant="outline-secondary"
      >
        {children}
      </Button>
    </li>
  );
}

export default TabButton;
