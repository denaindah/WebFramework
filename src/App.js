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
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
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

        <hr class="m-0" />

        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="interests"
        >
          <div class="w-100">
            <h2 class="mb-5">Interests</h2>
            <p>
              Apart from being a web developer, I enjoy most of my time being
              outdoors. In the winter, I am an avid skier and novice ice
              climber. During the warmer months here in Colorado, I enjoy
              mountain biking, free climbing, and kayaking.
            </p>
            <p class="mb-0">
              When forced indoors, I follow a number of sci-fi and fantasy genre
              movies and television shows, I am an aspiring chef, and I spend a
              large amount of my free time exploring the latest technology
              advancements in the front-end web development world.
            </p>
          </div>
        </section>

        <hr class="m-0" />

        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="awards"
        >
          <div class="w-100">
            <h2 class="mb-5">Awards &amp; Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                Google Analytics Certified Developer
              </li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                Mobile Web Specialist - Google Certification
              </li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
                Place - University of Colorado Boulder - Emerging Tech
                Competition 2009
              </li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
                Place - University of Colorado Boulder - Adobe Creative Jam 2008
                (UI Design Category)
              </li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
                Place - University of Colorado Boulder - Emerging Tech
                Competition 2008
              </li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
                Place - James Buchanan High School - Hackathon 2006
              </li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
                Place - James Buchanan High School - Hackathon 2005
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
