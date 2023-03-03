import React, { useState, useEffect } from "react";
import NextImage from 'next/image';

interface Option {
  label: string;
  value: string;
  response: string;
}

interface Props {
  options: Option[];
}

const Chatbot: React.FC<Props> = ({ options }) => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [conversation, setConversation] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [typing, setTyping] = useState<boolean>(false);

  useEffect(() => {
    setConversation(['Hey there. Ask me anything!']);
  }, []);

  const handleOptionClick = (value: string) => {
    setConversation([]);
    setSelectedOption(value);
    const option = options.find((option) => option.value === value);
    if (option) {
      setTyping(true);
      setTimeout(() => {
        setConversation((prevConversation) => [option.response.split("\n")[0]]);
        option.response
          .split("\n")
          .slice(1)
          .forEach((line, index) => {
            setTimeout(() => {
              setConversation((prevConversation) => [...prevConversation, line]);
            }, (index + 1) * 2000);
          });
        setTimeout(() => {
          setTyping(false);
        }, option.response.split("\n").length * 1000 + 1000);
      }, 0);
    }
  };

  const handleResetClick = () => {
    setConversation([]);
    setSelectedOption(null);
  };

  const handleToggleChatbot = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div>
        <div
          className={`chatbot-toggle-button${isOpen ? " open" : ""}`}
          onClick={handleToggleChatbot}
        >
          <NextImage src={'/chat-icon.png'} width={40} height={40} />
          <div className="chatbot-toggle-button-icon" />
        </div>
      </div>
      <div className={`chatbot-outline${isOpen ? "" : " open"}`}>
        <div className="chatbot-container">
          <div className="chatbot-header"><p style={{fontSize:'9.5px', opacity:'0.5'}}>SPARK ASKER v0.1.2</p>FAQ CHAT</div>
          <div className="chatbot-conversation">
            {conversation.length > 0 && (
              <div className="conversation-messages">
                {conversation.map((line, lineIndex) => (
                  <p
                    key={`${lineIndex}-${line}`}
                    className="conversation-message"
                  >
                    <div
                      className={`chatbot-message-bubble${typing ? " typing" : ""}`} style={{color:'rgba(16,16,16,1) !important'}}
                    >
                      {line}
                    </div>
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="chatbot-options">
            {selectedOption ? (
              <>
                <button
                  className="continue-button"
                  onClick={() => {
                    setConversation([]);
                    setSelectedOption(null);
                  }}
                >
                  Anything else you'd like to know?
                </button>
              </>
            ) : (
              <>
                <ul className="option-list">
                  {options.map((option) => (
                    <div className="option-outline" key={option.value}>
                      <li
                        className="option"
                        onClick={() => {
                          setConversation([]);
                          setSelectedOption(option.value);
                          handleOptionClick(option.value);
                        }}
                      >
                      {option.label}
                    </li>
                  </div>
                ))}
              </ul>
            </>
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
