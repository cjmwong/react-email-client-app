import React from "react";
import {Tile} from '../emailTile/emailTile.component';
import "./emailList.styles.css";


export const EmailList = ({ emails }) => (
    <div class='emaillist'>
    {emails.map(email => (
    <Tile key={email.id} email={email} />
    ))}
    </div>
    );

export default EmailList;
