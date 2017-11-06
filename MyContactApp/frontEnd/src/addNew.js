import React, {Component} from 'react';

class AddnewPage extends Component {
    constructor(){
        super();
        this.state ={
            success: false,
            warning:false,
            contact:{}
        };
        }

    submit(event){
        let that = this
        event.preventDefault();
        if(this.refs.name.value==='' && this.refs.mOffice.value==='')
        {
            this.setState({warning:true});
            console.log(this.state.warning)
            window.setTimeout(() => { that.setState({warning: false}) }, 1000)
        }

        let newContact ={
            name:this.refs.name.value,
            mobileOffice :this.refs.mOffice.value,
            mobilePersonal : this.refs.mPersonal.value,
            address: this.refs.address.value
        }
       let xhr = new window.XMLHttpRequest()
        xhr.open('POST','http://localhost:4000/contact/add',true)
        xhr.setRequestHeader('Content-Type','application/json')
        xhr.onreadystatechange=()=>{
            if (xhr.readyState === 4 && xhr.status === 200) {
                that.state.contact = JSON.parse(xhr.responseText)
                that.setState({contact: that.state.contact})
                that.setState({success: true})
                window.setTimeout(() => { that.setState({success: false}) }, 1000)
            } else {
            }
        }
        xhr.send(JSON.stringify(newContact));

        this.setState({
            success : !this.state.success
        });

    }
    render() {
        return (
            <div className="container">
                <span>
                    <h4> Add New Contact</h4>
                    <a href="/">
                    <button className="btn btn-link">Back</button></a>
                </span>

                <form>
                    <div className="form-row row justify-content-between">
                        <div className="form-group col-6">

                            <label>Name</label>
                            <input ref="name" type="text" className="form-control" placeholder="name" />

                            <label>Mobile Office</label>
                            <input ref="mOffice" type="text" className="form-control" placeholder="+00-000000000"/>

                            <label>Mobile Personal</label>
                            <input ref="mPersonal" type="text" className="form-control" placeholder="+00-000000000"/>

                            <label>Address</label>
                            <textarea ref="address" className="form-control" id="address" rows="3"></textarea>
                        </div>

                        <div className="form-group userimage col-2 align-self-start">

                            <label><i className="fa fa-user fa-5x"></i></label>
                            <input type="file" className="form-control-file" id="userImage"/>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={this.submit.bind(this)}>Create</button>
                    </div>
                    {
                        (this.state.success) &&
                        <div className='alert alert-success hidden' style={{width:'200px'}}>
                            <strong>Success!</strong>
                        </div>
                    }
                    {
                    (this.state.warning) &&
                    <div className='alert alert-warning hidden' style={{width:'200px'}}>
                        <strong>Enter valid Inputs</strong>
                    </div>
                    }
                </form>

            </div>
        )
    }
}

export default AddnewPage;