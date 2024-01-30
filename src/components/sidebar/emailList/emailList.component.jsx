import React from "react";
import {Tile} from '../emailTile/emailTile.component';
import "./emailList.styles.css";


export const EmailList = ({ emails, onSidebarClick }) => (
    <div className='emaillist'>
        {emails.map(email => (
            <Tile key={email.id} email={email} onClick={onSidebarClick} />
        ))}
    </div>
    );

export default EmailList;
