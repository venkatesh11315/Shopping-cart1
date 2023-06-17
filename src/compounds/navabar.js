import React from 'react'

function Navabar(props) {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div>
                    <a className="navbar-brand" href="#">Bootstrap</a>
                        <button className='btn btn-dark ' onClick={props.change}>AddCart {props.cart}</button>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navabar