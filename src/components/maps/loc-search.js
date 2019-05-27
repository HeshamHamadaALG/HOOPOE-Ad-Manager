import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import { FormControl } from 'react-bootstrap';

export class Search extends Component {
    render() {

        return (
            <div className="Search">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        );
    }
}

export default Search;
