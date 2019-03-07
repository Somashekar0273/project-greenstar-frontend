import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link, BrowserRouter as Router} from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';
import './Common.css';
import './App.css';
import headerLogo from './logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

class GroupList extends Component {

  constructor(props) {
    super(props);
    this.state = {groups: []};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    //this.setState({isLoading: true});

    fetch(`/api/group/${id}`)
      .then(response => response.json())
      .then(data => this.setState({groups: data}));
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

    /*if (isLoading) {
      return <p>Loading...</p>;
    }*/

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
        <Router>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/groups/" + group.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(group.id)}>Delete</Button>
          </ButtonGroup>
          </Router>
        </td>
      </tr>
    });

    return (
        <div className="app">
            <header className="header-logo">
                <img src={headerLogo} alt="logo" />
                <span className="logout">
                <a   href="/Login">Logout</a>
                </span>
            </header>
            <main className="main">
                <span className="explores">Explore Group</span>
                <span>
                <Menu width={ 200 }>
                    <a id="home" className="menu-item" href="/App">Home</a>
                    <a id="dashboard" className="menu-item" href="/Dashboard">Dashboard</a>
                    <a id="report" className="menu-item" href="/Report">Report</a>
                    </Menu>
                </span> 
                <Container fluid>
                <div className="float-right">
                
                    <a href="/GroupEdit">Add Group</a>
                   
                </div>
                
                <Table className="mt-4">
                    <thead>
                    <tr>
                    <th width="20%">ID</th>
                    <th width="20%">Name</th>
                    <th>Section</th>
                    <th>Classs</th>
                    <th width="10%">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {groupList}
                    </tbody>
                </Table>
                </Container>
            </main>
            <footer className="footer">
                <span className="footer-span"> @Copyright; version:1.0</span>
                <span className="footer-link" >
                    <a id="about" href="/About">About</a>
                </span>
                <span className="footer-link">
                    <a id="contact"  href="/Contact">Contact</a>
                </span>
            </footer>
      </div>
    );
  }
}

export default GroupList;