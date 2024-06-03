import { useNavigate } from "react-router";

const About=()=>{
    let navigate=useNavigate();
    return (
        <div>
            <h2>About page</h2>
            <button onClick={()=> navigate("/")}>Go to home</button>
        </div>
    );
}
export default About;