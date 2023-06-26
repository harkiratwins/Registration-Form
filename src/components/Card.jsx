import React from "react";

const CardComponent = () => {
  return (
    <div className="App ">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-4">
          <div className="card bg-white p-3 mb-4 shadow">
            <div className="d-flex justify-content-between mb-4">
              <div className="user-info">
                <div className="user-info__img">
                  <img src="img/user1.jpg" alt="User Img" />
                </div>
                <div className="user-info__basic">
                  <h5 className="mb-0">Kiran Acharya</h5>
                  <p className="text-muted mb-0">28 yrs, Male</p>
                </div>
              </div>
              <div className="dropdown open">
                <a
                  href="#!"
                  class="px-2"
                  id="triggerId1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-v"></i>
                </a>
                <div className="dropdown-menu" aria-labelledby="triggerId1">
                  <a className="dropdown-item" href="aa">
                    <i className="fa fa-pencil mr-1"></i> Edit
                  </a>
                  <a className="dropdown-item text-danger" href="aa">
                    <i className="fa fa-trash mr-1"></i> Delete
                  </a>
                </div>
              </div>
            </div>
            <h6 clclassNameass="mb-0">+91 9876543215</h6>
            <a href="#!">
              <small>Contact</small>
            </a>
            <div className="d-flex justify-content-between mt-4">
              <div>
                <h5 className="mb-0">
                  06:00 PM
                  <small className="ml-1">2 Feb 2021</small>
                </h5>
              </div>
              <span className="text-success font-weight-bold">Consult</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
