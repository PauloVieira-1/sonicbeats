import { Button } from "react-bootstrap";
function TabButton({children, onSelect}) {
    return (
        <li>
            <Button onClick = {onSelect} className="btn-rounded wide-button" variant="outline-secondary">{children}</Button>
        </li>
    )
}


export default TabButton