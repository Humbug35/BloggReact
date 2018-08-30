import React, { Component } from 'react';

class BlogEntry extends Component {
    render() {
        const post = this.props.entry;
        return (
            <section>
                <h1>{post.title}</h1>
                <section>
                    <span><strong>Författare:</strong> {post.author} | <strong>Datum:</strong> {post.date}</span>
                </section>
                <article>{post.body}</article>
                <section><p><strong>Kategori:</strong> {post.category}</p></section>
            </section>
        )
    }
}
export default BlogEntry;