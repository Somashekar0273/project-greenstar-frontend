import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table, Input, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

class GroupList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sectionId: "",
      classId: "",
      groups: [],
      showForm: false
    };
    this.onChange = this.onChange.bind(this);
    this.remove = this.remove.bind(this);  
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
}

  // onChange = (e) => {
  //   const target = e.target;
  //   const value = target.value;
  //   const name = target.name;
  //   let item = {...this.state.item};
  //   item[name] = value;
  //   this.setState({item});
  // }
  onSubmit = async () => {
    const { sectionId, classId} = this.state;    
    fetch('http://35.154.78.152:7777/api/v1/group/'+sectionId,{
        requestMethod: 'GET',
        requestHeaders: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "cache-control": "no-cache"
        }
      }).then(response => response.json()).then(data => {
          console.log(data);
          this.setState({
              groups: data,
          });
      }).catch(error => {
          console.log(error)
      });
      this.setState({showForm: true});
      this.props.history.push('/groups');
  }

  async remove(id) {
    await fetch(`/api/group/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedGroups = [...this.state.groups].filter(i => i.id !== id);
      this.setState({groups: updatedGroups});
    });
  }

  render() {
    const {groups} = this.state;
      const groupList = groups.map(group => {
      const address = `${group.address || ''} ${group.city || ''} ${group.stateOrProvince || ''}`;
      return <tr key={group.id}>
        
        <td style={{whiteSpace: 'nowrap'}}>{group.name}</td>
        <td>{address}</td>
        <td>{group.events.map(event => {
          return <div key={event.id}>{new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
          }).format(new Date(event.date))}: {event.title}</div>
        })}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/groups/" + group.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(group.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });
    const sectionId = this.state.sectionId;  
    const classId = this.state.classId; 
    const showHide = {
      'display': this.state.showForm ? 'block' : 'none'
    };
    return (
      <div>
        <Container fluid>
            <div className="float-left">
                  <Input ref="sectionId" name="sectionId" placeholder="Section" 
                                      onChange={e => this.onChange(e)}
                                      value={sectionId} /><br/>

                  <Input ref="classId" name="classId" placeholder="Class" 
                                      onChange={e => this.onChange(e)} 
                                      value={classId} /><br/>
               
                  <Button onClick={() => this.onSubmit()} onKeyPress={() => this.onSubmit()} type="primary">Submit</Button>&nbsp;&nbsp;
                  <Button color="success" tag={Link} to="/groups/new">Add Group</Button>
              </div>
              <div style={showHide}>
                <Table className="mt-4">
                  <thead>
                    <tr>
                      <th width="20%">Name</th>
                      <th width="20%">Location</th>
                      <th>Events</th>
                      <th width="10%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupList}
                  </tbody>
                </Table>
              </div>
        </Container>
      </div>
    );
  }
}

export default GroupList;