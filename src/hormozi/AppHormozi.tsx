import HormoziNav from "./components/Nav";
import HormoziHero from "./sections/Hero";
import ExecutionProblem from "./sections/ExecutionProblem";
import FutureVision from "./sections/FutureVision";
import ValueEquation from "./sections/ValueEquation";
import BuildExamples from "./sections/BuildExamples";
import HormoziTestimonials from "./sections/Testimonials";
import HormoziFounder from "./sections/Founder";
import ListReasons from "./sections/ListReasons";
import HormoziFitCheck from "./sections/FitCheck";
import FinalCta from "./sections/FinalCta";
import { Link } from "react-router-dom";
import "./hormozi.css";

export default function AppHormozi() {
  return (
    <div className="hormozi-page">
      <div className="hormozi-shell">
        <HormoziNav />
        <HormoziHero />
        <main>
          <ExecutionProblem />
          <FutureVision />
          <ValueEquation />
          <BuildExamples />
          <HormoziTestimonials />
          <HormoziFounder />
          <ListReasons />
          <HormoziFitCheck />
          <FinalCta />
        </main>
        <footer className="hormozi-footer">
          <div className="hormozi-footer-brand">
            <span className="hormozi-footer-mark" aria-hidden="true">
              <svg viewBox="0 0 25 24" fill="currentColor">
                <path d="m13.966 13.053 9.246-2.598-1.517-4.142-8.768 3.905z" />
                <path d="M11.06 13.053-9.326-2.598 1.53-4.142 8.844 3.905z" />
                <path d="m14.08 10.97.782-9.518-4.435-.035.617 9.53z" />
              </svg>
            </span>
            <div>
              <p className="hormozi-footer-name">AI Execution Accelerator</p>
              <p className="hormozi-footer-byline">
                A program by Antonio Centeno for established business owners
              </p>
            </div>
          </div>
          <p className="hormozi-footer-legal">
            &copy; {new Date().getFullYear()} AI Execution Accelerator. All rights
            reserved. Waitlist only — no purchase required today.
          </p>
          <p className="hormozi-footer-links">
            <Link to="/maxwell">Maxwell variation</Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
