import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <tr>
                <td><i className="fa fa-user-circle fa-3x"></i></td>
                <td><ul>
                    <li>{this.props.contact.name}</li>
                    <li>mob: {this.props.contact.mOffice}</li>
                </ul>
                    </td>
                <td><a href={"/contact/"+this.props.contact._id}> <button  className="btn btn-outline-info"><i className="fa fa-edit fa-2x" /></button></a></td>
            </tr>
        )
    }
}

export default Contact;