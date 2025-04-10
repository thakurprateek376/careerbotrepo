const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    actions.handleUserMessage(message);
  };

  return <>{children(parse)}</>;
};

export default MessageParser;
