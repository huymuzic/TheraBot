const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");
const themeButton = document.querySelector("#theme-btn");
const deleteButton = document.querySelector("#delete-btn");
const newChatButton = document.querySelector("#new-chat-btn");
const chatList = document.querySelector(".chat-list");

let userText = null;
const API_URL =
  "https://e2a524bd-91fd-448f-b7c8-0c8808da1b18-00-2sk2iczgs9yn4.riker.replit.dev/api/chat";
const initialHeight = chatInput.scrollHeight;

let chatHistories = [];
let currentChatIndex = -1;

const loadData = () => {
  const themeColor = localStorage.getItem("theme-color");
  document.body.classList.toggle("light-mode", themeColor === "light_mode");
  themeButton.innerText = document.body.classList.contains("light-mode")
    ? "dark_mode"
    : "light_mode";

  chatHistories = JSON.parse(localStorage.getItem("chat-histories")) || [];
  renderChatList();

  if (chatHistories.length > 0) {
    loadChat(0);
  } else {
    createNewChat();
  }
};

const renderChatList = () => {
  chatList.innerHTML = "";
  chatHistories.forEach((chat, index) => {
    const chatItem = document.createElement("div");
    chatItem.classList.add("chat-item");
    if (index === currentChatIndex) {
      chatItem.classList.add("active");
    }
    chatItem.textContent = `Chat ${index + 1}`;
    chatItem.addEventListener("click", () => loadChat(index));
    chatList.appendChild(chatItem);
  });
};

const loadChat = (index) => {
  currentChatIndex = index;
  chatContainer.innerHTML = chatHistories[index] || "";
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
  renderChatList();
};

const createNewChat = () => {
  const defaultText = `<div class="default-text">
    <h1>Welcome to Thera Bot!</h1>
    <p>Your personal AI Therapist</p>
    <p>Ask me anything and I'll try to help you out. Your chat history will be displayed here</p>
    </div>`;

  chatHistories.push(defaultText);
  currentChatIndex = chatHistories.length - 1;
  loadChat(currentChatIndex);
  saveChatHistories();
};

const saveChatHistories = () => {
  localStorage.setItem("chat-histories", JSON.stringify(chatHistories));
};

const createElement = (html, className) => {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = html;
  return chatDiv;
};

// Fetch chat response from the server.js

const getChatResponse = async (incomingChatDiv) => {
  const chatDetails = incomingChatDiv.querySelector(".chat-details");
  const chatbotIcon = incomingChatDiv.querySelector("img");
  const pElement = document.createElement("p");

  // Create a div element to hold the response
  const responseDiv = document.createElement("div");
  responseDiv.classList.add("chat-response");

  // Create a request object to send to the server

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: userText,
    }),
  };

  try {
    const response = await fetch(API_URL, requestOptions);
    const responseData = await response.json();
    const htmlContent = marked.parse(responseData.response.trim()); // Convert Markdown to HTML
    responseDiv.innerHTML = htmlContent;

    if (chatbotIcon) {
      chatDetails.prepend(chatbotIcon);
    }

    // pElement.textContent = responseData.response.trim();
  } catch (error) {
    pElement.classList.add("error");
    pElement.textContent = "Sorry, there was an error. Please try again later.";
    incomingChatDiv.querySelector(".chat-details").appendChild(pElement);
  }

  incomingChatDiv.querySelector(".typing-animation").remove();
  incomingChatDiv.querySelector(".chat-details").appendChild(responseDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
  chatHistories[currentChatIndex] = chatContainer.innerHTML;
  saveChatHistories();
  localStorage.setItem("all-chats", chatContainer.innerHTML);
  // incomingChatDiv.querySelector(".chat-details").appendChild(pElement);
};

// Copy chat response to clipboard
const copyResponse = (copyBtn) => {
  const responseTextElement =
    copyBtn.parentElement.querySelector(".chat-response");
  navigator.clipboard.writeText(responseTextElement.textContent);
  copyBtn.textContent = "done";
  setTimeout(() => (copyBtn.textContent = "content_copy"), 1000);
};

const showTypingAnimation = () => {
  const html = `
    <div class="chat-content">
      <div class="chat-details">
        <img src="Thera_Bot.png" alt="chatbot-image" />
        <div class="typing-animation">
          <div class="typing-dot" style="--delay: 0.2s"></div>
          <div class="typing-dot" style="--delay: 0.3s"></div>
          <div class="typing-dot" style="--delay: 0.4s"></div>
        </div>
      </div>
      <span onClick="copyResponse(this)" class="material-symbols-outlined">content_copy</span>
    </div>`;

  const incomingChatDiv = createElement(html, "incoming");
  chatContainer.appendChild(incomingChatDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
  getChatResponse(incomingChatDiv);
};

const handleOutgoingChat = () => {
  userText = chatInput.value.trim();
  if (!userText) return;

  const html = `
    <div class="chat-content">
      <div class="chat-details">
        <img src="avatar.png" alt="user-img" />
        <p></p>
      </div>
    </div>`;

  const outgoingChatDiv = createElement(html, "outgoing");
  outgoingChatDiv.querySelector("p").textContent = userText;
  chatContainer.querySelector(".default-text")?.remove();
  chatContainer.appendChild(outgoingChatDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
  chatInput.value = "";
  updateSendButtonState();

  chatHistories[currentChatIndex] = chatContainer.innerHTML;
  saveChatHistories();

  setTimeout(showTypingAnimation, 500);
};

const updateSendButtonState = () => {
  if (chatInput.value.trim()) {
    sendButton.classList.remove("disabled");
    sendButton.disabled = false;
  } else {
    sendButton.classList.add("disabled");
    sendButton.disabled = true;
  }
};

chatInput.addEventListener("keydown", (event) => {
  if (
    event.key === "Enter" &&
    !event.shiftKey &&
    !sendButton.disabled &&
    window.innerWidth > 768
  ) {
    event.preventDefault();
    sendButton.click();
  }
});

chatInput.addEventListener("input", updateSendButtonState);
sendButton.addEventListener("click", handleOutgoingChat);
themeButton.addEventListener("click", () => {
  // Toggle light/dark mode and save theme to local storage
  document.body.classList.toggle("light-mode");
  localStorage.setItem("theme-color", themeButton.innerText);
  themeButton.innerText = document.body.classList.contains("light-mode")
    ? "dark_mode"
    : "light_mode";
});

deleteButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all chats?")) {
    chatContainer.innerHTML = "";
    localStorage.removeItem("chat-histories");
  }
  window.location.reload();
});

chatInput.addEventListener("input", () => {
  // Adjust the height of the input field dynamically based on its content
  chatInput.style.height = `${initialHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

updateSendButtonState();

newChatButton.addEventListener("click", createNewChat);

loadData();

document.addEventListener("DOMContentLoaded", function () {
  const hmenu = document.querySelector("#hamburger-menu");
  const sidebar = document.querySelector(".sidebar");

  // Toggle sidebar visibility when hamburger menu is clicked
  hmenu.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the document
    sidebar.classList.toggle("show-sidebar");
  });

  // Close sidebar when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !sidebar.contains(event.target) &&
      !hmenu.contains(event.target) &&
      sidebar.classList.contains("show-sidebar")
    ) {
      sidebar.classList.remove("show-sidebar");
    }
  });

  // Prevent click events from closing the sidebar when clicking inside it
  sidebar.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the document
  });
});
