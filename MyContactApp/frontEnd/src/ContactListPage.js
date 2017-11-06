import React, {Component} from 'react';
import ContactsList from './ContactsList'

class ContactListPage extends Component {
    constructor(){
        super();
       this.state = {
           contacts : []
               /*[{
               id:1,
               name: 'santosh',
               mOffice: '2324252'
           },
               {
                   id:2,
                   name: 'sameer',
                   mOffice: '6734674'
               },{
                   id:3,
                   name: 'raj',
                   mOffice: '9383'
               },{
                   id:4,
                   name: 'yusuf',
                   mOffice: '82722'
               },{
                   id:5,
                   name: 'Rahul',
                   mOffice: '82722'
               }
           ]*/
           };
       this.loadContactList = this.loadContactList.bind(this)
        this.updateList = this.updateList.bind(this)
       this.loadContactList();
       }

       loadContactList(){
        let that = this;
        let xhr = new window.XMLHttpRequest()
           xhr.open('GET','http://localhost:4000/contacts',true)
           xhr.onreadystatechange= () => {
            if(xhr.readyState === 4 && xhr.status === 200){
                that.updateList(xhr.responseText)
                that.setState({contacts:that.state.contacts})
            }
           }
           xhr.send(null)
       }

    updateList(data){
           let cntctArray = JSON.parse(data);
           for(let i=0; i<cntctArray.length;i++){
               let current = cntctArray[i]
               this.state.contacts.push(current)
               console.log(current)
           }
    }
    render() {
        return (
            <div>
                <ContactsList contacts={this.state.contacts} />
            </div>
        )
    }
}

export default ContactListPage;