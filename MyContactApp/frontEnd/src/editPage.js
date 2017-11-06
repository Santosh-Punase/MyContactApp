import React, {Component} from 'react';

class EditPage extends Component {
    constructor(props){
        super(props);
        this.state={
            cur_contact:{}
        };
        let cur_id = this.props.match.params._id;
        console.log(cur_id);
        this.loadContent = this.loadContent.bind(this)
        this.loadContent(cur_id);
    }
    loadContent(cur_id){
        let that = this;
        let url = 'http://localhost:4000/contact/'+cur_id
        let xhr = new window.XMLHttpRequest()
        xhr.open('GET',url,true)
        xhr.onreadystatechange= () => {
            if(xhr.readyState === 4 && xhr.status === 200){
                console.log(JSON.parse(xhr.responseText));
                that.setState({cur_contact:JSON.parse(xhr.responseText)})
                console.log(that)
            }
        }
        xhr.send(null)
    }

    render() {
        return (
            <div className="container">
                <span>
                    <h4> Edit Contact</h4>
                     <a href="/">
                         <button className="btn btn-link">Back</button></a>
                </span>

                <form>
                    <div className="form-row row justify-content-between">
                        <div className="form-group col-6">

                            <label>Name</label>
                            <input defaultValue={this.state.cur_contact.name} type="text" className="form-control" placeholder="name" />

                            <label>Mobile Office</label>
                            <input type="text" className="form-control" placeholder="+00-000000000"/>

                            <label>Mobile Personal</label>
                            <input type="text" className="form-control" placeholder="+00-000000000"/>

                            <label>Address</label>
                            <textarea className="form-control" id="address" rows="3"></textarea>
                        </div>

                        <div className="form-group userimage col-2 align-self-start">

                            <label><i className="fa fa-user fa-5x"></i></label>
                            <input type="file" className="form-control-file" id="userImage"/>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditPage;