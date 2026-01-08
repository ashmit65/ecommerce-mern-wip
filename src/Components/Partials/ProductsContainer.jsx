import React from "react";
import { Link } from "react-router-dom";

export default function ProductsContainer({ title, data }) {
  return (
    <>
      {/* Products Start */}
      <div className="container-fluid py-5 bg-light">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            style={{ maxWidth: "800px" }}
          >
            <h2 className="fw-bold mb-3">{title}</h2>
            <p className="text-muted mb-0">
              Discover premium products with the best quality and pricing.
            </p>
          </div>

          <div className="row g-4">
            {data?.map((item, index) => (
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                key={index}
              >
                <div className="product-card h-100">
                  <div className="product-img">
                    <img
                      src={item.pic[0]}
                      className="img-fluid w-100"
                      alt={item.name}
                    />
                    <span className="badge bg-primary product-brand">
                      {item.brand}
                    </span>
                  </div>

                  <div className="product-body p-4">
                    <Link
                      to={`/product/${item.id}`}
                      className="product-title"
                    >
                      {item.name}
                    </Link>

                    <p
                      className={`small mb-2 ${
                        item.stock ? "text-success" : "text-danger"
                      }`}
                    >
                      {item.stock
                        ? `In Stock · ${item.quantity} left`
                        : "Out of Stock"}
                    </p>

                    <p className="mb-3">
                      <del className="text-muted me-2">
                        ₹{item.basePrice}
                      </del>
                      <span className="fw-bold fs-5">
                        ₹{item.finalPrice}
                      </span>
                      <span className="text-success small ms-2">
                        {item.discount}% off
                      </span>
                    </p>

                    <Link
                      to={`/product/${item.id}`}
                      className="btn btn-primary rounded-pill w-100"
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-12 text-center mt-4">
              <a className="btn btn-outline-primary rounded-pill px-5 py-3">
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Products End */}
    </>
  );
}
