import { useState } from "react";
import "./ShowList.css";

const Plan= ({ plan: p }) => {
    const [plan, setPlan] = useState(p);

    const Del = () => {
        if (window.confirm("삭제하시겠습니까?")) {
            fetch(`http://localhost:4000/Schedule/${plan.id}`, {
                method: "DELETE",
            }).then((res) => {
                if (res.ok) {
                    setPlan({ id: 0 });
                }
            });
        }
    };

    if (plan.id === 0) {
        return null;
    }

    return (
        <div className="plan">
            <p className="day">
                {plan.mon}월 {plan.day}일
            </p>
            <div className="Detail">
                <p className="word">{plan.plan}</p>
            </div>
            <button onClick={Del} className="deleteButton">
                Delete
            </button>
        </div>
    );
};

export default Plan