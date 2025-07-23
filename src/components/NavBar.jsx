import React from "react";
import { useNavigate } from "react-router-dom";

{/* List of choices to nav on page */}
{/*Use links on react-router to route to those links */}

function NavBar () {
    const navigatePath = useNavigate();
    return (
        <div className="navbar">
            <div className="navButtons">
                <button onClick={() => navigatePath('/')}>🏠 Dashboard</button>
                <button>ℹ️ More Info</button>
                <button>© Copyright Rights</button>
            </div>

        </div>
    )
}

export default NavBar