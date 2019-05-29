import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
// import HEREMap from 'react-here-maps';

import { PanelHeader } from "../../components";

class Locations extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>Google Maps</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    {/* <HEREMap
                    appId="{TKZQzaLaQ6mAyfMQkQTP}"
                    appCode="{ewFiXDJTbo3D3enckjxGJg}"
                    center={{ lat: 29.9887923, lng: 31.4147949 }}
                    zoom={14}
                /> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Locations;
