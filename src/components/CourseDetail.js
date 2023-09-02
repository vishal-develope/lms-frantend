import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function CourseDetail() {
    let { course_id } = useParams()
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-4">
                    <img src="/logo192.png" className="img-thumbnail" />
                </div>
                <div className="col-8">
                    <p>Visual Studio Code provides basic support for HTML programming out of the box. There is syntax highlighting, smart
                    completions with IntelliSense, and customizable formatting. VS Code also includes great Emmet support.</p>
                    <p>Visual Studio Code provides basic support for HTML programming out of the box. There is syntax highlighting, smart
                    completions with IntelliSense, and customizable formatting. VS Code also includes great Emmet support.</p>

                    <p className="fw-bold">Created By : <a href="#">Teacher {course_id}</a></p>
                    <p className="fw-bold">Duration : 3 hour 30 Minutes</p>
                    <p className="fw-bold">Total Enrolled: 456 Students</p>
                    <p className="fw-bold">Rating: 4.5/5</p>
                </div>
            </div>
            <div className="card mt-4">
                <div className="card-header">
                    Course Videos
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> Introduction  <button className="btn btn-sm btn-danger float-end">
                        <i className="bi-youtube"> </i></button></li>
                    <li className="list-group-item"> Setup Project <button className="btn btn-sm btn-danger float-end">
                        <i className="bi-youtube"> </i></button></li>
                    <li className="list-group-item"> Start with functional Component <button className="btn btn-sm btn-danger float-end">
                        <i className="bi-youtube"> </i></button></li>
                        <li className="list-group-item"> Introduction  <button className="btn btn-sm btn-danger float-end">
                        <i className="bi-youtube"> </i></button></li>
                    <li className="list-group-item"> Setup Project <button className="btn btn-sm btn-danger float-end">
                        <i className="bi-youtube"> </i></button></li>
                    <li className="list-group-item"> Start with functional Component <button className="btn btn-sm btn-danger float-end">
                        <i className="bi-youtube"> </i></button></li>
                </ul>
            </div>
            {/* latest courses */}
            <div className="row">
                <h2 className="mt-2">Related Course </h2>
                <div className="col-md-3">
                    <Link to="/detail/1">
                        <div className="card mt-4">
                            <img src="/logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-3">
                    <a href="">
                        <div className="card mt-4">
                            <img src="/logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="">
                        <div className="card mt-4">
                            <img src="/logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="">
                        <div className="card mt-4">
                            <img src="/logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>


    );
}

export default CourseDetail