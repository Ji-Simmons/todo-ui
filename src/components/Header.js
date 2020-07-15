import React, {Component as RC} from 'react';

export class Simple extends RC {
    render()
    {
        return (<div>Simple</div>);
    }
}

export default class Header extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <header className="main-header">
                <div>
                    <h1>Term glossary</h1>
                </div>
                
               
            </header>
        )
    }
}