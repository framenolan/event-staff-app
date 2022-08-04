import './Page.css'
import Shift from "../components/Shift";

function Completed() {

    return (
        <section className="Page" id='Completed'>
            <h2>Completed Shifts</h2>
            <Shift />
            <Shift />
            <Shift />
        </section>
    )
}

export default Completed;