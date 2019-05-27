import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import { PanelHeader } from "../../components";

class Goal extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">Goal</h5>
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

export default Goal;
