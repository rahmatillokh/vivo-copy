import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./css/funtouch.css";

function Funtouch() {
  return (
    <div className="funtouch__bolimi">
      <div className="funtouch">
        <Navbar />
        <div className="video">
          <video
            playsInline="true"
            autoPlay
            muted="true"
            src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/funtouch/1669602675295/zip/img/fos13-kv-video.mp4"
            type="video/mp4"
          ></video>
        </div>
        <section className="ui__color">
          <h3>UI color</h3>
          <h2>
            Make a Bold Color Statement
            <br />
            in One or More Ways.
          </h2>
          <p>
            Give your phone a personal look and feel never seen before. Choose
            from a wide range of built-in colors, and apply <br /> them across
            the user interface, from the notification panel to volume controls.
            You can also extract color from your <br /> wallpaper for a
            one-of-a-kind experience of styling your phone.
          </p>
          <img
            src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/funtouch/1669602675295/zip/img/fos13-system-img4-lg-x2.jpg.webp"
            alt=""
          />
          <div className="logos">
            <div className="left">
              <h3>Monochrome icon</h3>
              <h2>
                One Color is Never <br />
                Enough.
              </h2>
              <p>
                Unleash some creativity on your home screen, for <br />
                instance changing the color of your home screen <br /> icons to
                match that of your favorite wallpaper. <br /> Just tap once, and
                voila - a visually pleasing <br /> harmony of hues across the
                home screen and <br /> some of your favorite apps.
              </p>
            </div>
            <div className="right">
              <img
                src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/funtouch/1669602675295/zip/img/fos13-color-img3-lg-x2.jpg.webp"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="camera__section">
          <h3>Professional viewfinder system</h3>
          <h2>
            A Viewfinder that <br />
            Empowers Great Shots.
          </h2>
          <p>
            With the Level to check that your photo is perfectly horizontal, the
            Stabilization <br /> ring to guard against shaky hands and the Focus
            ring, get the confidence you need <br /> for the result you want.
          </p>
          <video
            src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/funtouch/1669602675295/zip/img/fos13-photo-video-pc.mp4"
            type="video/mp4"
            muted="true"
            autoPlay
            playsInline
            loop
          ></video>
        </section>

        <section className="animation__section">
          <div className="left">
            <h3>Effects Master</h3>
            <h2>
              The One-Stop <br /> Shop for Great <br /> Effects.
            </h2>
            <p>
              Want to change the vibrance, <br /> brightness, contrast and
              exposure? <br /> Find all their settings in the <br /> viewfinder,
              and simply swipe <br /> horizontally or vertically to get the{" "}
              <br />
              style you are satisfied with.
            </p>
          </div>
          <div className="right">
            <video
              src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/funtouch/1669602675295/zip/img/fos13-effect-video2.mp4"
              type="video/mp4"
              muted="true"
              autoPlay
              playsInline
              loop
            ></video>
          </div>
        </section>
        <section className="animation__section">
          <div className="left">
            <h3>Video Clips</h3>
            <h2>
              No Distractions. <br />
              Just Pro.
            </h2>
            <p>
              Mute videos with a single tap so you can <br /> focus on editing
              the footage. You can also <br /> make finer adjustments by
              changing the <br /> volume segment by segment.
            </p>
          </div>
          <div className="right">
            <video
              src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/funtouch/1669602675295/zip/img/fos13-clip-video.mp4"
              type="video/mp4"
              muted="true"
              autoPlay
              playsInline
              loop
            ></video>
          </div>
        </section>

        <div className="another__bg">
          <section className="album__section">
            <div className="left">
              <h3>Hidden album</h3>
              <h2>
                Some Memories <br />
                are for Your Eyes <br /> Only.
              </h2>
              <p>
                Hide selected photos and videos for improved <br /> privacy
                protection, so you don't have to worry <br /> about unwelcome
                sneak peeks even if you pass <br /> your phone to someone else.
              </p>
            </div>
            <div className="right">
              <video
                src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/funtouch/1669602675295/zip/img/fos13-album-video-pc.mp4"
                type="video/mp4"
                muted="true"
                autoPlay
                playsInline
                loop
              ></video>
            </div>
          </section>

          <section className="album__section">
            <div className="left">
              <h3>App pinning</h3>
              <h2>
                For Your <br /> Privacy, We Go <br /> One Step <br /> Further.
              </h2>
              <p>
                When someone borrows your phone, you can <br /> choose from two
                levels of pinning to keep your <br /> sensitive data secure. App
                pinning keeps the chosen <br /> app in view. Until you unpin it,
                only that app can be <br /> used. Or go another level to forbid
                all user actions <br /> within the app, so only a certain screen
                can be viewed.
              </p>
            </div>
            <div className="right">
              <video
                src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/funtouch/1669602675295/zip/img/fos13-screen-video-pc.mp4"
                type="video/mp4"
                muted="true"
                autoPlay
                playsInline
                loop
              ></video>
            </div>
          </section>

          <section
            className="animation__section"
            style={{ padding: "10vh", background: "#fff" }}
          >
            <div className="left">
              <h3>Active app manager</h3>
              <h2>
                Better Transparency.
                <br />
                Advanced Management.
              </h2>
              <p>
                Now you can easily manage active apps in the background, see{" "}
                <br /> their uptime, and shut them down with a single tap. App{" "}
                <br /> performance made transparent. App management made simple.
              </p>
            </div>
            <div className="right">
              <video
                src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/funtouch/1669602675295/zip/img/fos13-apps-video.mp4"
                type="video/mp4"
                muted="true"
                autoPlay
                playsInline
                loop
              ></video>
            </div>
          </section>

          <section className="accessibility">
            <div className="left">
              <img
                src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/funtouch/1669602675295/zip/img/fos13-guide-img1-lg-x2.jpg.webp"
                alt=""
              />
            </div>
            <div className="right">
              <h3>Accessibility</h3>
              <h2>
                Digital Accessibility <br /> Enjoyed by More.
              </h2>
              <p>
                Committed to helping more people enjoy the benefits <br /> of
                the digital world, we have upgraded our accessibility <br />{" "}
                services to guide those in need to set up their new <br />{" "}
                phones independently, with features including Color <br />{" "}
                correction, Color inversion, and Remove animations.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Funtouch;
