import React, { Component } from 'react'
import { Link} from 'react-router-dom';
export default class  extends Component {
    render() {
        return (
            <div>
                <h1>
                    this is an admin page.only authorised peopel have access to this page
                </h1>
                <Link to="./Logout"> Logout </Link>
            </div>
        )
    }
}
