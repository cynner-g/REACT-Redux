import React, { Component } from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';

 
class Dishdetail extends Component {
    
    renderComments(dishComments) {
        const comments = dishComments.map((comment) => {
            if (comment != null) {
                return (

                    <li><p>{comment.comment}</p>
                        <p>--{comment.author}, {comment.date}</p></li>
                )
            }
            else {
                return (
                    <div></div>
                )
            }
        });
        return (
            <ul className="list-unstyled">

                <h4>Comments</h4>
                {comments}
            </ul>
        );
    }

    render() {

        if (this.props.dish != null) {
            return (
                <div key={"Details-" + this.props.dish.id} className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }

        else {
            return (
                <div></div>
            );
        }
    }
}

export default Dishdetail;