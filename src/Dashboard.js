import React, {Component} from 'react';

import Star from './star.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends Component {
    render() {
        return (
        <div> 
            <tr className="dashboard"><td><Star/></td></tr>
        </div>
        );
    }
}
export default Dashboard;
