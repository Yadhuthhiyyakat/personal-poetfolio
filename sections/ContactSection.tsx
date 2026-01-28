
import React, { useState } from 'react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading'; // This might not be used directly, but keep for reference if needed

interface MailboxSidebarProps {
  onComposeClick: () => void;
  activeFolder: string;
  onFolderClick: (folder: string) => void;
}

const MailboxSidebar: React.FC<MailboxSidebarProps> = ({ onComposeClick, activeFolder, onFolderClick }) => {
  const folders = [
    { name: 'Inbox', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V7h14v12zm-7-2H5v-2h7v2zm7-4H5v-2h14v2zm0-4H5V7h14v2z"/></svg> },
    { name: 'Sent', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg> },
    { name: 'Drafts', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M14.06 9.06L15 8l-1.41-1.41-1.29 1.29 1.41 1.41zm-1.87 2.12L6.17 17.13 7.07 18l5.65-5.66-1.41-1.41zM20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0L15.35 4.93l3.72 3.72 1.64-1.64c.39-.39.39-1.02 0-1.41zM3 21h18v-2H3v2z"/></svg> },
    // Add more folders as needed
  ];

  return (
    <div className="w-48 bg-gray-800 p-4 border-r border-gray-700 flex flex-col">
      <Button
        variant="primary"
        size="md"
        className="mb-6 w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
        onClick={onComposeClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span>Compose</span>
      </Button>
      <nav>
        <ul className="space-y-1">
          {folders.map(folder => (
            <li key={folder.name}>
              <button
                className={`flex items-center px-3 py-2 rounded-md w-full text-left transition-colors duration-200
                  ${activeFolder === folder.name ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                onClick={() => onFolderClick(folder.name)}
              >
                {folder.icon}
                <span className="ml-3">{folder.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

interface EmailCardProps {
  sender: string;
  subject: string;
  snippet: string;
  date: string;
  onClickAction: () => void;
}

const EmailCard: React.FC<EmailCardProps> = ({ sender, subject, snippet, date, onClickAction }) => {
  return (
    <button
      className="flex flex-col bg-white border border-gray-200 rounded-lg p-4 mb-3 text-left w-full shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onClickAction}
    >
      <div className="flex justify-between items-center mb-1">
        <p className="font-semibold text-gray-900">{sender}</p>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <p className="font-medium text-gray-800 mb-1">{subject}</p>
      <p className="text-sm text-gray-600 truncate">{snippet}</p>
    </button>
  );
};

interface MailContentAreaProps {
  emailAddress: string;
  whatsappNumber: string;
  onComposeClick: () => void;
}

const MailContentArea: React.FC<MailContentAreaProps> = ({ emailAddress, whatsappNumber, onComposeClick }) => {
  const whatsappMessage = encodeURIComponent("Hello Yadhu, I saw your portfolio and wanted to get in touch!");
  const todayDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <div className="flex-grow bg-gray-50 p-6 flex flex-col">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Inbox</h2>
      <div className="flex-grow overflow-y-auto pr-2"> {/* Added pr-2 for scrollbar space */}
        <EmailCard
          sender="Portfolio Inquiry"
          subject="Connect via Email"
          snippet="Click here to send me a direct email."
          date={todayDate}
          onClickAction={onComposeClick} // Use onComposeClick which triggers mailto
        />
        <EmailCard
          sender="Portfolio Inquiry"
          subject="Connect via WhatsApp"
          snippet="Click here to initiate a WhatsApp chat."
          date={todayDate}
          onClickAction={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
        />
        {/* Potentially add more static/example emails here */}
      </div>
    </div>
  );
};


const ContactSection: React.FC = () => {
  const emailAddress = 'yadhuthiyakkat@gmail.com'; // Replace with your actual email
  const whatsappNumber = '9778256341'; // Replace with your actual WhatsApp number

  const [activeFolder, setActiveFolder] = useState('Inbox');

  const handleComposeClick = () => {
    window.open(`mailto:${emailAddress}`, '_blank');
  };

  return (
    <div className="flex h-full bg-gray-100 rounded-b-xl">
      <MailboxSidebar
        onComposeClick={handleComposeClick}
        activeFolder={activeFolder}
        onFolderClick={setActiveFolder}
      />
      <MailContentArea
        emailAddress={emailAddress}
        whatsappNumber={whatsappNumber}
        onComposeClick={handleComposeClick}
      />
    </div>
  );
};

export default ContactSection;