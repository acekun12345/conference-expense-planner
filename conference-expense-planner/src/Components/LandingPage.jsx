import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onGetStarted }) => {
    return (
        <div className="landing-container">
            <div className="landing-overlay">
                <div className="landing-content">
                    {/* Left Column - Hero Branding */}
                    <div className="hero-section">
                        <h1 className="hero-title">
                            Conference Expense Planner
                        </h1>
                        <p className="hero-subtitle">
                            Plan your next major event with us!
                        </p>
                        <button className="get-started-btn" onClick={onGetStarted}>
                            Get Started
                        </button>
                    </div>

                    {/* Right Column - About / Mission Statement */}
                    <div className="info-card">
                        <p>
                            Welcome to <strong>BudgetEase Solutions</strong>, your trusted partner in simplifying budget management and financial solutions. At BudgetEase, we understand the importance of effective budget planning and strive to provide intuitive, user-friendly solutions to meet the diverse needs of our clients.
                        </p>
                        <p>
                            With a commitment to efficiency and innovation, we empower individuals and businesses to take control of their finances and achieve their goals with ease.
                        </p>
                        <p>
                            At BudgetEase Solutions, our mission is to make budgeting effortless and accessible for everyone. Whether you're a small business owner, a busy professional, or an individual looking to manage your personal finances, we offer tailored solutions to streamline your budgeting process.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;