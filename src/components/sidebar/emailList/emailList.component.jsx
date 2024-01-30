import React from "react";
import {Tile} from '../emailTile/emailTile.component';
import "./emailList.styles.css";


/**
 * EmailList component used to display EmailTile component in a single column
 *
 * @param {emails} array array of email objects representing emails in someones email system
 * @param {onSidebarClick} function Captures event when the user clicks on the sidebar
 */
export const EmailList = ({ emails, onSidebarClick }) => (
    <div className='emaillist'>
        {emails.map(email => (
            <Tile key={email.id} email={email} onClick={onSidebarClick} />
        ))}
    </div>
    );

export default EmailList;
