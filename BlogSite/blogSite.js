
function addToDom(user) {
    const userName = document.createElement('div');
    userName.innerText = (`Blogger Name:  ${user.name}`);
    userName.style.padding = "8px";
    document.body.append(userName);

    const webSite = document.createElement('div');
    webSite.innerText = (`Blogger Website:  ${user.website}`);
    webSite.style.padding = "8px";
    document.body.append(webSite);

    const company = document.createElement('div');
    company.innerText = (`Company Name:  ${user.company.name}`);
    company.style.padding = "8px";
    document.body.append(company);


    const seeButton = document.createElement('button');
    seeButton.innerText = (`see ${user.name}'s posts`);
    document.body.append(seeButton)

    const separater = document.createElement('div');
    separater.innerText = '--------------------------------------------------------------------------------------------------';
    document.body.append(separater);

    seeButton.addEventListener('click', () => eventListener(user.id));

}

function addPostToDom(post) {

    const postDiv = document.createElement('div');
    postDiv.className = 'postDiv';
    postDiv.style.border = ".5px solid black";
    document.body.append(postDiv);

    const title = document.createElement('div');
    title.innerText = (`Post Title:  ${post.title}`);
    title.style.padding = "8px";
    postDiv.append(title);

    const body = document.createElement('div');
    body.innerText = (`Post:  ${post.body}`);
    body.style.padding = "8px";
    postDiv.append(body);

    const comments = document.createElement('button');
    comments.innerText = ('View Comments');
    comments.className = 'commentButton';
    comments.dataset.postId = post.postId;
    postDiv.append(comments);

    comments.addEventListener('click', () => viewButton(comments, post.userId));

}

function addCommentsToDom(comment) {


    const name = document.createElement('div');
    name.innerText = (`Commenter:  ${comment.name}`);
    name.style.padding = "8px";
    name.className = 'comment';
    document.body.append(name);

    const email = document.createElement('div');
    email.innerText = (`email:  ${comment.email}`);
    email.style.padding = "8px";
    email.className = 'comment';
    document.body.append(email);

    const body = document.createElement('div');
    body.innerText = (`Post:  ${comment.body}`);
    body.style.padding = "8px";
    body.className = 'comment';
    document.body.append(body);
}

async function fetchAndPrint() {
    document.body.innerHTML = '';
    try {
        const response = await fetch('user.json');

        console.log('Response status:', response.status);

        if (!response.ok) {
            throw new Error(`Failed to fetch user.json. Status: ${response.status}`);
        }

        const users = await response.json();

        users.forEach(user => {
            addToDom(user);
        });
    }
    catch (error) {
        console.error('Error fetching and printing users:', error);
    }
};

fetchAndPrint();


async function eventListener(id) {
    document.body.innerHTML = '';
    const backToHome = document.createElement('button');
    backToHome.innerText = ('back to home page');
    backToHome.id = ('homeButton')
    document.body.append(backToHome);

    const homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', () => fetchAndPrint());

    try {
        const response = await fetch('post.json');
        console.log('response status:', response.status);
        if (!response.ok) {
            throw new Error(`failed to fetch post.json Status: ${response.status}`);
        }
        const posts = await response.json();

        posts.forEach(post => {
            if (post.userId == id) {
                addPostToDom(post)
            }
        })
    }
    catch (error) {
        console.error('Error fetching and printing posts:', error);
    }
}

async function seeComments(postId) {
    try {
        const response = await fetch('comments.json');
        console.log('response status:', response.status);
        if (!response.ok) {
            throw new Error(`failed to fetch post.json Status: ${response.status}`);
        }
        const comments = await response.json();

        comments.forEach(comment => {
            if (comment.postId == postId) {
                addCommentsToDom(comment)
            }
        })

    }
    catch (error) {
        console.error('Error fetching and printing comments:', error);
    }
}

const commentButton = document.querySelectorAll('.commentButton');

function hideComments(postId) {
    const comments = document.querySelectorAll('.comment');
    comments.forEach(comment => {
        comment.remove();

    })


    commentButton.forEach(button => {

        button.innerText = 'View Comments';
        button.addEventListener('click', () => viewButton(button, postId));
    });


}

function viewButton(button, postId) {
    const isViewButton = button.innerText === 'View Comments';

    if (isViewButton) {
        seeComments(postId);
        button.innerText = 'Hide Comments';
    } else {
        hideComments(postId);
        button.innerText = 'View Comments';
    }
}