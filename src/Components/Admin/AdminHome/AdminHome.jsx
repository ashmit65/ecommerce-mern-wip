import React from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <>
      <div className="container-fluid my-4">
        <div className="row g-4">
          <div className="col-xl-2 col-md-3">
            <Sidebar />
          </div>

          <div className="col-xl-10 col-md-9">
            <div className="row g-4 align-items-center">

              {/* Profile Section */}
              <div className="col-md-4 text-center">
                <div className="profile-avatar-wrapper mx-auto">
                  <img
                    src="/img/noimage.jpeg"
                    alt="Admin"
                    className="profile-avatar"
                  />
                </div>
                <h5 className="mt-3 fw-semibold">Asmit</h5>
                <span className="text-muted">Administrator</span>
              </div>

              {/* Info Section */}
              <div className="col-md-8">
                <div className="card shadow-sm border-0">
                  <div className="card-header bg-success text-white fw-semibold">
                    Admin Details
                  </div>

                  <div className="card-body">
                    <div className="row mb-2">
                      <div className="col-4 fw-semibold text-muted">Username</div>
                      <div className="col-8">asmit</div>
                    </div>

                    <div className="row mb-2">
                      <div className="col-4 fw-semibold text-muted">Email</div>
                      <div className="col-8">ashmits554@gmail.com</div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-4 fw-semibold text-muted">Phone</div>
                      <div className="col-8">9540503529</div>
                    </div>

                    <Link
                      to="/update-profile"
                      className="btn btn-primary rounded-pill px-4"
                    >
                      Update Profile
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
