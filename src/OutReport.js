import React, {Component} from 'react';
import './cssstyles/table-twbs.css';
import Report from 'bv-react-data-report';
import 'bootstrap/dist/css/bootstrap.min.css';

// Generate random data
var names = [ 'Carlos', 'Juan', 'Jesus', 'Alberto', 'John' ];
var cities = [ 'Chicago', 'Tampico', 'San Francisco', 'Mexico City', 'Boston', 'New York' ];
var addresses = [ '333 West Wacker Drive', '1931 Insurgentes Sur', '1 Lombard Street', '55 Av Hidalgo'];

var outData = [];
for (var i = 0; i < 100; i++) {
  outData.push({
    id: i,
    name: names[~~(Math.random() * names.length)],
    city: cities[~~(Math.random() * cities.length)],
    address: addresses[~~(Math.random() * addresses.length)]
  });
}

var columns = [
  { title: 'Name', prop: 'name'  },
  { title: 'City', prop: 'city' },
  { title: 'Address', prop: 'address' }
];

class OutReport extends Component {
    render() {
        return (
            <div className="report">
                <Report data={outData}/>
            </div>
        );
    }
}

export default OutReport;