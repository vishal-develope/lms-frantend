function Register() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card" >
                        <div className="card-header">
                            User Register
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="examplefullname" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="exampleInputfullname" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputUser" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInputUsername" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3"> 
                                    <label for="exampleInputInterested" className="form-label">Interested</label>
                                    <textarea className="form-control"></textarea>
                                    <div id="emailHelp" class="form-text">python, html, css</div>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" for="exampleCheck1">Remeber me</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register