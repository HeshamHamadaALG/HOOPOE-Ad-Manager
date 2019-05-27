import React, { Component } from 'react';
import Maps from './maps/map';
import Search from './maps/loc-search';
import Register from './register/register';
import {
    Tabs, Tab,
} from 'react-bootstrap';




export class DashBorad extends Component {
    render() {
        return (
            <div className="DashBorad">
                <div className="container cont-sizing">
                    <Tabs className="navtabs" defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab className="content-tab" eventKey="locations" title="Locations">
                        <div className="cont-sizing">
                        <Search  style={{width: '18rem'}}/> 
                            {/* <Maps /> */}
                            <div className="col-md-9">
                                
                            </div>
                        </div>
                        </Tab>
                        <Tab className="content-tab" eventKey="assets" title="Assets">

                        </Tab>
                        <Tab className="content-tab" eventKey="policy" title="Policy">
                            <Register />
                        </Tab>
                        <Tab className="content-tab" eventKey="persona" title="Persona">

                        </Tab>
                        <Tab className="content-tab" eventKey="goal" title="Goal">

                        </Tab>
                        <Tab className="content-tab" eventKey="payment" title="Payment">

                        </Tab>
                        <Tab className="content-tab" eventKey="analytics" title="Analytics">

                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default DashBorad;




// 1st 


// // padding: 1.7rem 0 0 0;

// /* border: 0; */
// border-radius: .125rem;