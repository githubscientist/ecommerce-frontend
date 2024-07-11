import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import Sidebar from "../components/Sidebar";

const AdminDashboardWrapper = () => {

    const navigate = useNavigate();
    const user = useLoaderData();

  const handleLogout = () => {
    userServices.logout()
      .then(response => {
        alert('logout successful');

        // redirect to login page
        navigate('/login');
      })
      .catch(error => {
        alert(error.response.data.message);
      })
  }

  return (
    <div className="mx-2">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/">Admin Dashboard</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                <Link className="nav-link disabled" to="/">Welcome { user.data.user.name }</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                            </li>
                      </ul>
                      </div>
                  </div>
          </nav>
          
          <div className="row mt-5">
              <div className="col-md-3">
                  <Sidebar />
              </div>

              <div className="col-md-9">
                  <Outlet />
                </div>
          </div>
    </div>
  )
}

export default AdminDashboardWrapper;