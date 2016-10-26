import * as React from 'react';
import { Navbar } from './containers/navigation/Navbar';
import { ContextPane } from './containers/pane/ContextPane';
 
export class App extends React.Component<void, void> {
    public render() {
        return (
            <div>
                <Navbar />
                <ContextPane />
                <div id="content">
                    { this.props.children }
                </div> 
                <div id="footer">&copy;2016 Rhino Security Labs. All Rights Reserved.</div>
            </div>        
        );
    }
}