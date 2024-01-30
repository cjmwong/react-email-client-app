import './App.css';
import { useState, useEffect } from "react";
import EmailList from "./components/sidebar/emailList/emailList.component";
import Content from "./components/content/content.component";
import SearchBar from './components/search-bar/searchbar.component';
import Inbox from './components/inbox-deleted/inbox.component';
import Trash from './components/inbox-deleted/trash.component';

var currentFolder = "inbox"; //set default view to inbox


function App() {
  const [emails, setEmails] = useState([]);
  const [content, setContent] = useState([]);
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect (() => {
    const fetchEmails = async () => {;
      const response = await fetch("https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json");
      const emails = await response.json();
      let filtered = [];
      filtered = emails.filter(email =>
        email.tag.includes(currentFolder));
      setEmails(emails);
      setFilteredEmails(filtered);
  };
    fetchEmails();
  }, []);

  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
      filtered = emails
    } else {
      filtered = emails.filter(email =>
        email.subject.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setFilteredEmails(filtered);
  }, [emails, searchInput]);

  const handleSidebarClick = (emailID) => {
    const email = emails.find(email => email.id === emailID);
    setContent(email);
    const updatedEmails = emails.map(email => {
      if (email.id === emailID) {
        email.read = "active";
      } else if (email.read === "active") {
        email.read = "true"
      }

      return email;
    });
    let filtered = [];
    filtered = updatedEmails.filter(email => email.tag.includes(currentFolder));
    setFilteredEmails(filtered);
  }

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchInput(e.target.value)
    }
  };

  const handleInbox = () => {
    currentFolder = "inbox";
    let inbox = [];
    inbox = emails.filter(email =>
      email.tag.includes('inbox'));
    setFilteredEmails(inbox)
  };

  const handleTrash = () => {
    currentFolder = "deleted";
    let trash = [];
    trash = emails.filter(email =>
      email.tag.includes('deleted'));
    setFilteredEmails(trash);
  };

  return (
    <div className='App'>
      <div className='Search'>
        <SearchBar placeholder={"Search Emails"} onKeyDown={handleSearch}/>
      </div>
      <div className='Body'>
        <div className='Menu'>
          <p>
            Inbox
            <Inbox onClick={handleInbox}/>
          </p>
          <p>
            Trash
            <Trash onClick={handleTrash}/>
          </p>
        </div>
        <div className='Sidebar'>
          <p>
            Inbox
          </p>
          <EmailList emails = {filteredEmails} onSidebarClick={handleSidebarClick}/>
        </div>
        <div className='Main'>
          <Content email = {content}/>
        </div>
      </div>
    </div>
  );
}

export default App;
