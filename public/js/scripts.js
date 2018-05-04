const deleteBtn = [...document.querySelectorAll('.deleteBtn')];

const xhr = new XMLHttpRequest();

deleteBtn.map(btn => {
  btn.addEventListener('click', function (e) {
    const id = e.target.parentElement.id;
    console.log(id);
    const path = window.location.pathname;
    const url = `http://localhost:7878${path}/deleteEntry/${id}`;

    xhr.open("DELETE", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ id }));

    window.location.reload(true);
  });
});

/*
See here for how to make a POST request
https://stackoverflow.com/questions/6396101/pure-javascript-send-post-data-without-a-form
*/