import React from "react";
import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ToolsGarage
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tools Availabe
                </a>
                <ul className="dropdown-menu" role="button">
                  <li>
                    <Link className="dropdown-item" to="image-compressor">
                      Image Compressor
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="QR-generator">
                      QR Code Generator
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="image-text-extractor">
                      Image Text Extractor
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="password-generator">
                      Password Genarator
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="yt-thumbnail-downloader"
                    >
                      Yt Thumbnail Downloader
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="url-shortner">
                      URL Shortner
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="pdf-compressor">
                      PDF Compressor
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
