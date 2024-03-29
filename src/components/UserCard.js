import React from "react";

function UserCard(props) {
    return (
    <div className="userCard">
        <div className="card--user">
            <img 
                src={`http://localhost:3000/api/pfp?user=${props.user}` || "BigRig.jpg"} 
                className="cardImg"
                alt="user"
            />
            <h4 className="card--username">{props.userName}</h4>
        </div>
        <div className="card--info">
            <h3 className="card--activity">{props.activity}: </h3>
            <p>{props.additionalInfo}</p>
        </div>
    </div>
    )
}

export default UserCard
