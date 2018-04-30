const deleteBtn = [...document.querySelectorAll('.deleteBtn')];

console.log(deleteBtn);

deleteBtn.map(btn => {
  btn.addEventListener('click', function(e) {
    console.log(e.target.parentElement.id);
  })
});

/*
See here for how to make a POST request
https://stackoverflow.com/questions/6396101/pure-javascript-send-post-data-without-a-form
*/