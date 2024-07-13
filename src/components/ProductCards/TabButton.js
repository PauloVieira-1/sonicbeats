import { Button } from "react-bootstrap";
function TabButton({children, onSelect, isActive}) {
    return (
        <li>
            <Button onClick = {onSelect} className={`btn-rounded wide-button' ${isActive ? 'active shadow-transition' : ''}`} variant="outline-secondary">{children}</Button>
        </li>
    )
}


export default TabButton