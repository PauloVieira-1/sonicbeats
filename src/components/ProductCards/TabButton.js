import { Button } from "react-bootstrap";
function TabButton({children}) {
    return (
        <li>
            <Button className="btn-rounded wide-button" variant="outline-secondary">{children}</Button>
        </li>
    )
}


export default TabButton