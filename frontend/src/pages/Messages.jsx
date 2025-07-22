import { useState } from "react";


const dummyConversations = [
  { id: 1, name: "Ali Raza", lastMessage: "Let's schedule a call", timestamp: "2h ago" },
  { id: 2, name: "Sarah Malik", lastMessage: "I liked your pitch", timestamp: "5h ago" },
];

const dummyMessages = [
  { id: 1, sender: "me", content: "Hi, I'm interested in your startup!" },
  { id: 2, sender: "them", content: "Thanks! Happy to answer any questions." },
];

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(dummyConversations[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="flex min-h-screen">

      <div className="flex-grow grid grid-cols-3 bg-gray-800">
        {/* Left panel: Conversation List */}
        <div className="col-span-1 border-r bg-emerald-300 p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          {dummyConversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedChat(conv)}
              className={`p-3 rounded-xl cursor-pointer hover:bg-emerald-500 ${
                selectedChat.id === conv.id ? "bg-emerald-400" : ""
              }`}
            >
              <h3 className="font-medium text-emerald-800">{conv.name}</h3>
              <p className="text-sm text-gray-500">{conv.lastMessage}</p>
              <p className="text-xs text-gray-700">{conv.timestamp}</p>
            </div>
          ))}
        </div>

        {/* Right panel: Chat window */}
        <div className="col-span-2 flex flex-col p-6">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-emerald-300">
            Chat with {selectedChat.name}
          </h2>

          <div className="flex-grow overflow-y-auto space-y-4 mb-4">
            {dummyMessages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-xs p-3 rounded-2xl text-white ${
                  msg.sender === "me" ? "bg-emerald-500 ml-auto" : "bg-gray-500 mr-auto"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              className="flex-grow p-3 rounded-xl border text-emerald-200"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              onClick={handleSend}
              className="bg-emerald-600 text-white px-5 py-2 rounded-xl hover:bg-emerald-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
