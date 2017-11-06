import React, {Component} from 'react';

let uId;

class EditPage extends Component {

    constructor(props){
        super(props);
        this.state={
            success:false,
            cur_contact:{}
        };
        let cur_id = this.props.match.params._id;
        console.log(cur_id);
        uId = cur_id;
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

    submit(event){
        let that = this
        event.preventDefault();

        let newContact ={
            name:this.refs.name.value,
            mobileOffice :this.refs.mOffice.value,
            mobilePersonal : this.refs.mPersonal.value,
            address: this.refs.address.value
        }
        let xhr = new window.XMLHttpRequest()
        xhr.open('PUT','http://localhost:4000/contact/'+uId,true)
        xhr.setRequestHeader('Content-Type','application/json')
        xhr.onreadystatechange=()=>{
            if (xhr.readyState === 4 && xhr.status === 200) {
                let updated_contact = JSON.parse(xhr.responseText)
               console.log(updated_contact);
                that.setState({success: true})
                window.setTimeout(() => { that.setState({success: false}) }, 1000)
            } else {
            }
        }

        xhr.send(null);

        this.setState({
            success : !this.state.success
        });

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
                            <input value={this.state.cur_contact.name} ref="name" type="text" className="form-control" placeholder="name"
                                onChange={(event) => {this.setState({cur_contact: {name: event.value}})}}
                            />

                            <label>Mobile Office</label>
                            <input value={this.state.cur_contact.mOffice} ref="mOffice" type="text" className="form-control" placeholder="+00-000000000"
                                   onChange={(event) => {this.setState({cur_contact: {name: event.value}})}}
                            />

                            <label>Mobile Personal</label>
                            <input value={this.state.cur_contact.mPersonal} ref="mPersonal" type="text" className="form-control" placeholder="+00-000000000"
                                   onChange={(event) => {this.setState({cur_contact: {name: event.value}})}}
                            />

                            <label>Address</label>
                            <textarea value={this.state.cur_contact.address} ref="address" className="form-control" id="address" rows="3"
                                      onChange={(event) => {this.setState({cur_contact: {name: event.value}})}}
                            />
                        </div>

                        <div className="form-group userimage col-2 align-self-start">

                            <label><i className="fa fa-user fa-5x"></i></label>
                            <input type="file" className="form-control-file" id="userImage"/>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={this.submit.bind(this)}>Save</button>
                    </div>
                            {
                                (this.state.success) &&
                                <div className='alert alert-success hidden' style={{width:'200px'}}>
                                    <strong>Success!</strong>
                                </div>
                            }
                </form>

            </div>
        )
    }
}

export default EditPage;