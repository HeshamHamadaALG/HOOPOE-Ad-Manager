import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { PanelHeader } from "../../components";

class Assets extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
              <CardHeader>
                <h5 className="title">Assets</h5>
              </CardHeader>
                <CardBody>
                 
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Assets;
