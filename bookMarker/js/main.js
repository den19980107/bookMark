//add the functionalitive that user can hit the enter to create new book mark
document.onkeydown = function(evt) {
  var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
  if (keyCode == 13) {
    getContain();
  }
}

//when user add new bookmark into the list
//get the submit id
//add listener to submit button
var submit = document.getElementById('submit');

submit.addEventListener('click', function() {
  getContain();
})

function getContain() {
  var name = document.getElementById('name').value;
  var url = document.getElementById('url').value;
  var book = {
    name: name,
    url: url
  }
  addToMark(book);
  document.getElementById('name').value = '';
  document.getElementById('name').focus();
  1
  document.getElementById('url').value = '';
}


//the function to go to website
function goWebsite(url) { //goWebsite start
  console.log(url);
  var str = url;
  var res = str.substring(0, 6);
  //confirm the url is correct
  
  window.open(url);
  
} //goWebsite end

function deleteWebsite(li) { //deleteWebsite start
  //li's parentNode is the ul
  //which is contain all the list
  //use parentNode can find the ul
  //and use removeChild(li) can remove this li
  li.parentNode.removeChild(li);
} //deleteWebsite end

//add to book mark list function
function addToMark(book) { //addToMark start
  //create the list element
  var li = document.createElement("li");
  //the list have two button
  //one is the vist button click and goto the website
  var vist = document.createElement("BUTTON");
  //second is delete click to delete this list
  var Delete = document.createElement("BUTTON");
  //get the element where we want to put the list in
  var ul = document.getElementById('list');

  //chage the vistbutton text to Vist
  vist.innerText = "Vist";
  //add the css call "Vist" class to vistbtn
  vist.classList.add("Vist");

  //change the deletebutton text to delete
  Delete.innerText = "Delete";
  //add the css call "delete" class to deletebtn
  Delete.classList.add("Delete");

  //add the css call "li" class to the li
  li.className = "li";
  //change the innerText of the li to book.name which is our bookmark name
  li.innerText = book.name;

  //each li has two btn add the order is vist first
  //and delete second
  li.appendChild(vist);
  li.appendChild(Delete);
  //add our new record to the ul which is all the list stay
  ul.appendChild(li);
  //add the listener to vist
  //when it click it will go to the website
  vist.addEventListener('click', function() {
    goWebsite(book.url);
  });
  // same as vist add the tListener
  // oh! and if you want to call the function and
  // pass the value to the function
  // you need to write like buttom
  // add a function(){
  // and call the function(pass the value)
  // }
  // cant to this
  //                                  this ˇ this is not allow
  // Delete.addEventListener('click', deleteWebsite(li) {
  //
  //})
  Delete.addEventListener('click', function() {
    deleteWebsite(li);
  })

} //addToMark end