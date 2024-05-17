import { Button } from "@/components/ui/button";
import "./home.css";

const home = () => {
  return (
    <div className="box">
      <div className="hero-header-section">
        <div className="overlap-group">
          <div className="text-wrapper">
            <img
              className="text-wrapper"
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
          </div>
        </div>
        <div className="title">We Help You Keep in Sync with Your Sehat!</div>
        <p className="lead">Never forget your medicines again.</p>
        <p className="text-3xl font-bold underline">
          Never forget your medicines again.
        </p>
        <Button>Button</Button>
        <button className="cta">{"Let's Get Started"}</button>
      </div>
    </div>
  );
};

export default home;
