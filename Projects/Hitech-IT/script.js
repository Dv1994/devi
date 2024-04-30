const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
  }, 600);
};

const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type !== "user") {
    className = "chatbot-message";
  }

  const messageEle = document.createElement("div");
  const img = document.createElement("img");
  const txtNode = document.createTextNode(txt);

  img.src = type === "user" ? "public/msgr1.jpg" : "public/msgr2.jpg";
  img.alt = type === "user" ? "User Image" : "Chatbot Image";
  img.classList.add("message-image");

  messageEle.classList.add(className);
  messageEle.appendChild(img);
  messageEle.appendChild(txtNode);
  chatBody.appendChild(messageEle);
};


const getChatbotResponse = (userInput) => {
  return responseObj[userInput] == undefined
    ? "Please try something else"
    : responseObj[userInput];
};

const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};
function startCall() {
  alert("Calling feature is not implemented yet!");
}
