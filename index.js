const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const wishlist = document.getElementById("wishlist");
let wishList = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addWishlist();
});

function addWishlist() {
  // get input
  const newWishlist = input.value;
  // return if nothing was entered
  if (!newWishlist) return;
  // add the new task to todo list
  wishList.push({
    text: newWishlist,
    completed: false,
  });
  // add the wishlist list to localstorage
  localStorage.setItem("wishlists", JSON.stringify(WishlistList));
  // render wishlist list
  render();
}