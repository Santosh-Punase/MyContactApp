import React, {Component} from 'react';
import Contact from "./contact";

class ContactsList extends Component {
    constructor(){
        super();
        this.state = {
            search: ''
        };
    }
    update(event){
        this.setState({search:event.target.value});
    }
    render() {
        let filteredContacts = this.props.contacts.filter(
            (contact)=> {
                return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )
        return (
            <div className="container">
               <div >
                   <span>
                        <input type="text" className="form-control" id="searchbar"
                               placeholder="search"
                               value={this.state.search}
                               onChange={this.update.bind(this)}
                        />

                       <a href="/contact/add">
                        <button className="btn btn-outline-dark btn-lg" id="addbtn">
                <i className="fa fa-user-plus" >Add new</i>
                        </button></a>
                   </span>
            </div>
                <table className="table table-hover">

                    <tbody>
                    {
                        filteredContacts.map((contact) => {
                            return <Contact contact={contact} key={contact._id}/>
                        })
                    }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default ContactsList;