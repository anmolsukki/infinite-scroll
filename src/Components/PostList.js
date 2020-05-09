import React, { Component } from 'react';
import fetch from "isomorphic-fetch";
import Post from "./Post";

class ContactList extends Component {
    state = {
        posts: [],
        postId: 1,
        totalPage: null,
        scrolling: false
    }

    componentDidMount = () => {
        this.loadPosts();
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        const { scrolling, totalPage, postId } = this.state;
        if(scrolling) return
        if(totalPage <= postId) return
        const lastLI = document.querySelector("ul.posts > li:last-child")
        const lastLiOffset = lastLI.offsetTop + lastLI.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        var bottomOffset = 20;
        if(pageOffset > lastLiOffset - bottomOffset) this.loadMore()
    }

    loadPosts = () => {
        const { postId, posts } = this.state;
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(response => response.json())
        .then(json => this.setState({
            posts: [...posts ,...json],
            scrolling: false,
            totalPage: 100
        }))
    }

    loadMore = () => {
        this.setState(prevState => ({
            scrolling: true,
            postId: prevState.postId + 1
        }), this.loadPosts)
    }

    render() {
        return (
            <div>
                <ul className="posts">
                    {this.state.posts.map(post => <li key={post.id}><Post {...post} /></li>)}
                </ul>
            </div>
        )
    }
}

export default ContactList;
