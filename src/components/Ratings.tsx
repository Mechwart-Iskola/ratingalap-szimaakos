import star from "../../images/icon-star.svg"

const Rating = () =>{
    return (
        <>
        <div className="container">
            <div className="star-container">
                <img src={star} alt="" />
            </div>
            <h1>How did we do?</h1>
            <p>Please let us know blablabla</p>
            <div className="button-group">
                {[1,2,3,4,5].map((button=>(
                    <button>{button}</button>
                )))}
            </div>
            <button className="btn">submit</button>
        </div>
        </>
    )
}

export default Rating