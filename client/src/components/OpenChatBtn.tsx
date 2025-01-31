import '../styles/open-chat-btn.scss';

export const OpenChatBtn = () => {
  const openChat = () => {
    return <h1>chat opened</h1>;
  };
  return (
    <div className="open-chat-btn" onClick={openChat}>
      <img src="" alt="Open group chat" />
    </div>
  );
};
