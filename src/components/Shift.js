import './Shift.css'

function Shift() {

    return (
        <card className='Shift'>
            <h3>Shift</h3>
            <form>
                <label>Enter your name: 
                    <input type="text" name='name' readOnly/>
                </label>
            </form>
        </card>
    )
}

export default Shift;