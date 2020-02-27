import React from "react";
import "./App.css";
import foto1 from "./image/gb1.jpg";

function App() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">D. Dena Indah Amalia</span>
          <span class="d-none d-lg-block">
            <img
              class="img-profile rounded-circle mx-auto mb-2"
              src={foto1}
              alt=""
              width="500"
              height="500"
            />
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#experience">
                Keorganisasian
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#education">
                Pendidikan
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container-fluid p-0">
        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="about"
        >
          <div class="w-100">
            <h1 class="mb-0">
              D. Dena
              <span class="text-primary">Indah Amalia</span>
            </h1>
            <div class="subheading mb-5">
              Jl. Senggani No.36 · Politeknik Negeri Malang · 081515836355 ·
              <a href="mailto:name@email.com">denaindahamalia@gmail.com</a>
            </div>
            <p class="lead mb-5">
              Mahasiswa POLITEKNIK NEGERI MALANG Semester 6, Progam Studi D4
              Teknik Informatika. Tempat Tanggal Lahir -> Probolinggo 08
              November 1998. Alamat -> Jl. Ingas Pendowo Gg 3, Sumobito -
              Jombang
            </p>
          </div>
        </section>

        <hr class="m-0" />

        <section
          class="resume-section p-3 p-lg-5 d-flex justify-content-center"
          id="experience"
        >
          <div class="w-100">
            <h2 class="mb-5">Keorganisasian</h2>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <div class="subheading mb-3">
                  Organizing Committee Himpunan Mahasiswa Teknologi Informasi
                  Politeknin Negeri Malang.
                </div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">2018-2019</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <div class="subheading mb-3">
                  Ketua Pelaksana Peduli Sosial Himpunan Mahasiswa Teknologi
                  Informasi Politeknin Negeri Malang.
                </div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">2018</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <div class="subheading mb-3">
                  Steering Committee, bidang Kepala Staff Departemen PSDM
                  Himpunan Mahasiswa Teknologi Informasi Politeknin Negeri
                  Malang.
                </div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">2019-2020</span>
              </div>
            </div>
          </div>
        </section>

        <hr class="m-0" />

        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
        >
          <div class="w-100">
            <h2 class="mb-5">Pendidikan</h2>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <h3 class="mb-0">Politeknik Negeri Malang</h3>
                <div class="subheading mb-3">
                  Teknologi Informasi | D4 Teknik Informatika
                </div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">2017-Sekarang</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
              <div class="resume-content">
                <h3 class="mb-0">
                  SMK Telekomunikasi, Pondok Pesantren Darul ‘Ulum Jombang
                </h3>
                <div class="subheading mb-3">
                  Jurusan | Rekayasa Perangkat Lunak
                </div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">2014-2017</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
              <div class="resume-content">
                <h3 class="mb-0">
                  MTsN Rejoso Peterongan 1 Jombang, Pondok Pesantren Darul ‘Ulum
                </h3>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">2011-2014</span>
              </div>
            </div>
          </div>
        </section>

        <hr class="m-0" />

        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="skills"
        >
          <div class="w-100">
            <h2 class="mb-5">Skills</h2>
            <ul>
              <li>
                <i class="fa-li fa fa-check"></i>
                Desain &amp; Perancangan Software
              </li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Desain &amp; Perancangan Website
              </li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Desain &amp; Perancangan Database
              </li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Mengoperasikan Microsoft
              </li>
            </ul>
          </div>
        </section>

      </div>
      {/* <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

      <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
      <script src="js/resume.min.js"></script> */}
    </div>
  );
}

export default App;
