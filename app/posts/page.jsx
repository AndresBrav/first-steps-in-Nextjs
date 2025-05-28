import React from 'react';

async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

const PostPages = async () => {
    const posts = await loadPosts();
    console.log(posts);
    return (
        <>
            <div>PostPages</div>
            {posts.map((post) => (
                <li key={post.id}>
                    <strong>{post.title}</strong>
                </li>
            ))}
        </>
    );
};

export default PostPages;
