// Sample array of friends
const friends = ["Alice", "Bob", "Charlie", "David", "Eva"];

// Get the friends list element by ID
const friendsList = document.getElementById("friends");

// Loop through the array and create list items for each friend
friends.forEach((friend) => {
  // Create a list item element
  const listItem = document.createElement("li");

  // Set the text content of the list item to the friend's name
  listItem.textContent = friend;

  // Add a class for styling (optional)
  listItem.classList.add("friend-item");

  // Add a click event listener to each list item (optional)
  listItem.addEventListener("click", () => {
    alert(`You clicked on ${friend}`);
    // Add your logic here, e.g., start a chat with the selected friend
  });

  // Append the list item to the friends list
  friendsList.appendChild(listItem);
});

// Modify your JavaScript to handle friends list
const searchFriendsInput = document.getElementById("searchFriends");

// Add your friends to the list dynamically
friends.forEach((friend) => {
  const friendItem = document.createElement("li");
  friendItem.classList.add("friend-item");
  friendItem.textContent = friend;

  friendItem.addEventListener("click", () => {
    // You can add logic to start a chat with the selected friend
    console.log(`Clicked on ${friend}`);
  });

  friendsList.appendChild(friendItem);
});

// Add a listener for the search input
searchFriendsInput.addEventListener("input", () => {
  const searchTerm = searchFriendsInput.value.toLowerCase();

  // Filter friends based on the search term
  friends.forEach((friend) => {
    const friendItem = friendsList.querySelector(`:contains('${friend}')`);

    if (friend.toLowerCase().includes(searchTerm)) {
      friendItem.style.display = "block";
    } else {
      friendItem.style.display = "none";
    }
  });
});

// Add a helper function to perform case-insensitive :contains selector
jQuery.expr[":"].contains = jQuery.expr.createPseudo(function (arg) {
  return function (elem) {
    return (
      jQuery(elem)
        .text()
        .toLowerCase()
        .indexOf(arg.toLowerCase()) >= 0
    );
  };
});
