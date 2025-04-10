import axios from "axios";

const ActionProvider = ({ createChatBotMessage, setState }) => {
  const handleUserMessage = async (message) => {
    try {
      const res = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        max_tokens: 500,
      }, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      });

      const botMessage = createChatBotMessage(res.data.choices[0].message.content);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error("OpenAI API Error:", error);
      const errorMessage = createChatBotMessage("Sorry, I couldn't get a response. Please try again.");
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  };

  return {
    handleUserMessage,
  };
};

export default ActionProvider;
