declare const $: any;

import * as React from 'react';

interface EditModalProps {
    title: string
    buttons?: React.Component<{}, {}>
    visible?: boolean
}

export class Modal extends React.Component<EditModalProps, {}> {
    
    public render() {
        let modal: React.ReactElement<EditModalProps> = null;
        if(this.props.visible) {
            modal = (
                <div className="modal fade" id="modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 className="modal-title" id="myModalLabel">{ this.props.title }</h4>
                            </div>
                            <div className="modal-body">
                                { this.props.children }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                { this.props.buttons }
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return modal;
    }

    public componentDidUpdate() {
        if(this.props.visible) {
            $('#modal').modal('show');
        }
    }
}