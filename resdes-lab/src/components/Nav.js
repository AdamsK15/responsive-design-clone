import React from 'react';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    clickHandler = () => {
        this.setState({ open: !this.state.open })
    }


    render() {
        const { open } = this.state
        return (
            <nav className='apc'>
                <button onClick={this.clickHandler}>Menu</button>
                <ul className={open ? 'opened' : 'closed'}>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Products</li>
                    <li className="nav-item">Contact</li>
                </ul>

            </nav>
        )
    }

}