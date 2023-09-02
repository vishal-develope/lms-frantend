import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="container">
            {/* latest courses */}
            <div className="row">
                <h2 className="mt-2">Latest Course <a className="sm-auto" href="">See all</a></h2>
                <div className="col-md-3">
                    <Link to="/detail/1">
                        <div className="card mt-4">
                            <img src="logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-3">
                    <a href="">
                        <div className="card mt-4">
                            <img src="logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="">
                        <div className="card mt-4">
                            <img src="logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="">
                        <div className="card mt-4">
                            <img src="logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            {/* {latest courses} */}
            {/* popular courses */}
            <div className="row">
                <h2 className="mt-2">Popular Courses <a href="" className="sm-auto">See all</a></h2>
                <div className="col-md-3">
                    <a href="">
                        <div className="card mt-4">
                            <img src="logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="">
                        <div className="card mt-4">
                            <img src="logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="">
                        <div className="card mt-4">
                            <img src="logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="">
                        <div className="card mt-4">
                            <img src="logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            {/* popular courses */}
            {/* popular teacher */}
            <div className="row">
                <h2 className="mt-2">Popular Teachers <a href="" className="sm-auto">See all</a></h2>
                <div className="col-md-3">
                    <a href="">
                        <div className="card mt-4">
                            <img src="logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="">
                        <div className="card mt-4">
                            <img src="logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="">
                        <div className="card mt-4">
                            <img src="logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="">
                        <div className="card mt-4">
                            <img src="logo192.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="row">
                <div id="carouselExampleControls" className="carousel slide bg-dark text-white py-2 mt-3" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="carousel-item">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="carousel-item">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home