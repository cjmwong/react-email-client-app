import './App.css';
import { useState, useEffect } from "react";
import EmailList from "./components/sidebar/emailList/emailList.component";
import Content from "./components/content/content.component";

function App() {
  const [emails, setEmails] = useState([]);
  const [content, setContent] = useState([]);
  console.log("hi");
  useEffect (() => {
    const fetchEmails = async () => {
      const response = await fetch("https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json");
      const emails = await response.json();
      setEmails(emails);
  };
    fetchEmails();
  }, []);

  const handleSidebarClick = (emailID) => {
    setContent(emails.find(email => email.id === emailID));
  }

  return (
    <div class='App'>
      <div class='Body'>
        <div class='Menu'>
          <p>
            Inbox
          </p>
          <p>
            Trash
          </p>
        </div>
        <div class='Sidebar'>
          <p>
            Inbox
          </p>
          <EmailList emails = {emails} onSidebarClick={handleSidebarClick}/>
        </div>
        <div class='Main'>
          <p>
            Body View
          </p>
          <Content email = {content}/>
        </div>
      </div>
    </div>
  );
}

export default App;
