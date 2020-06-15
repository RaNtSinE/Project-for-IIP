'use strict';

const e = React.createElement;

class news extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.new')
    .forEach(domContainer => {
        // Read the comment ID from a data-* attribute.
        const commentID = parseInt(domContainer.dataset.commentid, 10);
        ReactDOM.render(
            e(news, { commentID: commentID }),
            domContainer
        );
    });