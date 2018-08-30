import React, { Component } from 'react';

class Pagination extends Component {

    render() {
        let li = [];
        for (let i = 0; i < this.props.total; i++ ) {
            li.push(<li href="/" onClick={() => this.props.getPost(i+1)}>{i + 1}</li>)
        }
        return(
            <ul>
                {li}
            </ul>
        )
    }
}
export default Pagination;