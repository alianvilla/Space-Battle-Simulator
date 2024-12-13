import './Comments.css'
const Comments = ({comment}) => {
    return (
        <div className="Comments">
            <div className="Comments-row">
                <p>{comment}</p>
            </div>
        </div>
    );
}

export default Comments