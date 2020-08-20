import React from "react";
import './experienceItem.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class ExperienceItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show_modal: false
        }
    }

    handleClose = () => this.setState({show_modal: false});
    handleShow = () => this.setState({show_modal: true});

    render() {
        return (
            <>
                <div className="ExperienceItem">
                    <img className="experience-logo" src={this.props.logo}/>
                    <div className="experience-body">
                        <h3 className="experience-title"><strong>{this.props.title}</strong></h3>
                        <div className="experience-meta">{this.props.date}</div>
                        <div>{this.props.location}</div>
                    </div>
                    {this.props.description &&
                    <div className="text-center">
                        <div onClick={this.handleShow} className="btn mt-2 btn-sm btn-outline-dark mr-1">More
                            Info
                        </div>
                    </div>
                    }
                </div>

                <Modal show={this.state.show_modal} onHide={this.handleClose}>
                    <div className="popup">
                        <Modal.Body>{this.props.description}</Modal.Body>
                        <div className="d-flex justify-content-center">
                            <div className="btn btn-primary" onClick={this.handleClose}>
                                X
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
}