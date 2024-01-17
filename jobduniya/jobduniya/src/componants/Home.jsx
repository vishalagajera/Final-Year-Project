import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import Check from "../Auth/check";
import "../Style/home.css"

const Home = ({ setModell }) => {
  Check()
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await fetch("http://localhost:5500/users", {
        headers: {
          authorization: Cookies.get("token")
        }
      })
      const data = await users.json();
      // console.log(data);
      setData(data);
      if (data.unauthorized && !Cookies.get("logedwithgoogle")) {
        setModell(true)
      }
    }
    fetchUsers()
  }, [])

  return (
    <>
      <div className="Home">
        <div className="container main-content">
          <div className="row">
            <div className="col-3 left-side">HI</div>
            <div className="col-6 middle-side">Helllo</div>
            <div className="col-3 right-side">Hiiii</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home