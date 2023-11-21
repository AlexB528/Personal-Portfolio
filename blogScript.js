// function to change formatting of date
function formatDate(JSDateString) {
    const date = new Date(JSDateString)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// function to truncate content if the length exceeds 210 characters
function truncateContent (content) {
    const maxLength = 210;
    if (content.length > maxLength) {
        const lastSpaceIndex = content.lastIndexOf(" ", maxLength);
        const truncatedContent = content.substring(0, lastSpaceIndex);
        return `${truncatedContent} ...`;
    } else {
        return content;
    }
}



// GET request using fetch() - get all published blog posts
fetch("http://localhost:3000/catalog/blogPosts")

	// Converting received data to JSON
	.then(response => response.json())
	.then(json => {
        let postList = document.getElementById('postList');
        json.result.forEach((post,index) => {

            let postDisplayed = document.createElement('li');
                postDisplayed.setAttribute('id',post._id);
                if (index === 0) {
                    postDisplayed.setAttribute('class','post first-post');
                } else {
                    postDisplayed.setAttribute('class','post');
                }
            let postDisplayedHeader = document.createElement('a');
                postDisplayedHeader.setAttribute('href', '#');
                postDisplayedHeader.setAttribute('class', 'post-title-link');
                postDisplayedHeader.addEventListener('click', (e) => {
                    e.preventDefault();
                    sessionStorage.setItem('postToDisplayInFull', JSON.stringify(post));
                    window.location.href = 'fullPost.html';
                })
            let postDisplayedDate = document.createElement('h5');
            let postDisplayedContent = document.createElement('div');

            postDisplayedHeader.innerText = post.title;
            postDisplayedDate.innerText = formatDate(post.timestamp);
            postDisplayedContent.innerText = truncateContent(post.content);

            postDisplayed.appendChild(postDisplayedHeader);
            postDisplayed.appendChild(postDisplayedDate);
            postDisplayed.appendChild(postDisplayedContent);
            postList.appendChild(postDisplayed);
        });
    });

// reveal dropdown menu for sign in form

const navButtons = document.querySelectorAll('.nav-button')
// const dropdownMenu = document.querySelector("#sign-in-dropdown-content");

function changeBurgerClass (buttons) {
    buttons.forEach((button) => {
        let dropdownMenu = document.querySelector(`#${button.id}-dropdown-content`)
        button.addEventListener("click", () => {
            if (dropdownMenu.classList.contains('menuExpand')) {
                dropdownMenu.classList.add('menuCollapse');
                dropdownMenu.classList.remove('menuExpand');
            } else {
                dropdownMenu.classList.add('menuExpand');
                dropdownMenu.classList.remove('menuCollapse');
            }
        });
    })
};

changeBurgerClass(navButtons);



const userForm = document.querySelector("#userForm");

userForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let JSONformData = {};

    for (let element of this.elements) {
        if (element.type !== 'submit') {
            JSONformData[element.name] = element.value;
        }
    }

    fetch('http://localhost:3000/catalog/users/createUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(JSONformData)
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        dropdownMenu.classList.add('menuCollapse');
        dropdownMenu.classList.remove('menuExpand');
    })
    .then(setTimeout(() => location.reload(),501))
    .catch(error => console.error('Error:', error));
});

const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // let JSONformData = {};

    // for (let element of this.elements) {
    //     if (element.type !== 'submit') {
    //         JSONformData[element.name] = element.value;
    //     }
    // }

    // GET request using fetch() - get all published blog posts
    fetch("http://localhost:3000/catalog/users/login")
        // Converting received data to JSON
        .then(response => response.json())
        .then(json => {
            console.log(json)
        })
        .catch(error => console.error('Error:', error));
});