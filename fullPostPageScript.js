let post = JSON.parse(sessionStorage.getItem('postToDisplayInFull'));

function formatDate(JSDateString) {
    const date = new Date(JSDateString)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

let postList = document.getElementById('postList');

let postDisplayed = document.createElement('li');
    postDisplayed.setAttribute('id',post._id);
    postDisplayed.setAttribute('class','post first-post fullPost');
let postDisplayedHeader = document.createElement('h1');
    postDisplayedHeader.setAttribute('href', '#');
    postDisplayedHeader.setAttribute('class', 'fullPostTitle');

let postDisplayedDate = document.createElement('h5');
let postDisplayedContent = document.createElement('div');

postDisplayedHeader.innerText = post.title;
postDisplayedDate.innerText = formatDate(post.timestamp);
postDisplayedContent.innerText = post.content;

postDisplayed.appendChild(postDisplayedHeader);
postDisplayed.appendChild(postDisplayedDate);
postDisplayed.appendChild(postDisplayedContent);
postList.appendChild(postDisplayed);
