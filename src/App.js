import React, { Component } from 'react';
import './App.css';

const styles = {
  getStartedButton: {
    padding: 14,
    margin: 16,
    height: 40,
    lineHeight: 1,
    verticalAlign: 'baseline'
  }
}

class App extends Component {
  render() {
    return (
      <div>
        {/* Topbar */}
        <nav className="topbar topbar-expand-sm topbar-sticky">
          <div className="container">
            <div className="topbar-left">
              <button className="topbar-toggler">☰</button>
              <a className="topbar-brand" href="index.html">
                <span style={{color: '#3b3b3b', fontSize: 20, fontWeight: 'normal'}}>WORLDCLASS</span>
              </a>
            </div>
            <div className="topbar-right">
              <ul className="topbar-nav nav">
                <li className="nav-item"><a className="nav-link" href data-scrollto="home">Home</a></li>
                <li className="nav-item"><a className="nav-link" href data-scrollto="section-features">Features</a></li>
                <li className="nav-item"><a className="nav-link" href data-scrollto="section-pricing">Pricing</a></li>
                <li className="nav-item"><a className="nav-link" href data-scrollto="section-faq">FAQ</a></li>
                <li className="nav-item"><a className="nav-link" href data-scrollto="section-help">Help</a></li>
                <li className="nav-item"><a className="nav-link" href="https://studio.worldclass.io/#/login">Sign in</a></li>
                <li>
                  <a className="btn btn-lg btn-success"
                    style={styles.getStartedButton}
                    href="https://studio.worldclass.io/#/signup">Get Started</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END Topbar */}
        {/* Header */}
        <header className="header h-fullscreen" id="home" style={{backgroundImage: 'linear-gradient(150deg, #fdfbfb 0%, #eee 100%)'}}>
          <div className="container-wide">
            <div className="row h-full align-items-center text-center text-lg-left">
              <div className="offset-1 col-10 col-lg-4 offset-lg-1">
                <h1>WorldClass<br /><small style={{color: '#3b3b3b'}}>Create, publish and sell beautiful courses online</small></h1>

                <p>It's super easy to create, publish and sell courses online.
Get your branded site and mobile apps today!</p>
                <br />
                <p className="lead mx-auto" />
                <br />
                <a className="btn btn-lg btn-success" href="page-register.html">Get Started</a>
                <p className="pt-8"><small>Already have an account? <a className="text-muted" href="page-login.html">Sign in</a></small></p>
              </div>
              <div className="col-12 col-lg-6 offset-lg-1 img-outside-right hidden-md-down">
                <img className="shadow-4" src={require('./img/dashboard2.jpg')} alt="..." />
              </div>
            </div>
          </div>
        </header>
        {/* END Header */}
        {/* Main container */}
        <main className="main-content">
          {/*
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Features
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      !*/}
          <section className="section" id="section-features">
            <div className="container">
              <header className="section-header">
                <small>Features</small>
                <h2>Team communication for the 21st century.</h2>
                <hr />
              </header>
              <div className="row gap-y align-items-center">
                <div className="col-12 col-md-5 text-center">
                  <img src={require('./img/drag.png')} alt="..." />
                </div>
                <div className="col-12 offset-md-1 col-md-6">
                  <h5>Drag, drop, and share your files.</h5>
                  <p>Not just your messages, but all your files, images, PDFs, documents, and spreadsheets can be dropped right into Slack and shared with anyone you want. Add comments, star for later reference, and it’s all completely searchable.</p>
                  <p>If you use any services like Google Drive, Dropbox, or Box, just paste the link and that document is immediately in sync and searchable too.</p>
                </div>
              </div>
              <hr className="w-200 my-90" />
              <div className="row gap-y align-items-center">
                <div className="col-12 col-md-6">
                  <h5>Works everywhere you go</h5>
                  <p>Everything in Slack—messages, notifications, files, and all—is automatically indexed and archived so that you can have it at your fingertips whenever you want. Slack also indexes the content of every file so you can search within PDFs, Word documents, Google docs, and more. With one search box and a set of powerful search operators, you can slice and dice your way to that one message in your communication haystack.</p>
                </div>
                <div className="col-12 offset-md-1 col-md-5 text-center">
                  <img src={require('./img/everywhere.png')} alt="..." />
                </div>
              </div>
              <hr className="w-200 my-90" />
              <div className="row gap-y align-items-center">
                <div className="col-12 col-md-5 text-center">
                  <img src={require('./img/tools.png')} alt="..." />
                </div>
                <div className="col-12 offset-md-1 col-md-6">
                  <h5>All your tools in one place.</h5>
                  <p>Connect all the tools you use to Slack and avoid all that constant switching between apps. Set up your integration so that you get all your notifications directly within Slack—from support requests, code check-ins, and error logs to sales leads—all of them searchable in one central archive.</p>
                  <p>If you use any services like Google Drive, Dropbox, or Box, just paste the link and that document is immediately in sync and searchable too.</p>
                </div>
              </div>
            </div>
          </section>
          {/*
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Features
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      !*/}
          <section className="section bg-gray">
            <div className="container">
              <div className="row gap-y">
                <div className="col-12 col-lg-4">
                  <div className="card card-bordered text-center">
                    <div className="card-block">
                      <p><i className="icon-layers fs-50 text-muted" /></p>
                      <h4 className="card-title">Channels</h4>
                      <p className="card-text">Organize your team conversations in open channels. Make a channel for a project, a team, or everyone has a transparent view.</p>
                      <a className="fw-600 fs-12" href>Read more <i className="fa fa-chevron-right fs-9 pl-5" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card card-bordered text-center">
                    <div className="card-block">
                      <p><i className="icon-chat fs-50 text-muted" /></p>
                      <h4 className="card-title">Direct Messages</h4>
                      <p className="card-text">Send messages directly to another and any person or to a small group of people for more focused conversations.</p>
                      <a className="fw-600 fs-12" href>Read more <i className="fa fa-chevron-right fs-9 pl-5" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card card-bordered text-center">
                    <div className="card-block">
                      <p><i className="icon-mic fs-50 text-muted" /></p>
                      <h4 className="card-title">Calls</h4>
                      <p className="card-text">Take a conversation from typing to face-to-face by starting a Slack voice or video call in any Channel or Direct Message.</p>
                      <a className="fw-600 fs-12" href>Read more <i className="fa fa-chevron-right fs-9 pl-5" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Reclaim your workday
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      !*/}
          <section className="section text-center">
            <div className="row">
              <div className="col-12 offset-md-3 col-md-6">
                <p><img src={require('./img/cta.png')} alt="..." /></p>
                <br />
                <h3 className="fw-900 mb-20">Reclaim your workday</h3>
                <p className="lead text-muted">Less email. More productive. Our customers see an average 48.6% reduction in internal email, helping them enjoy a simpler, more pleasant, and more productive work life.</p>
                <br />
                <a className="btn btn-lg btn-round btn-success" href data-scrollto="section-pricing">Start now</a>
              </div>
            </div>
          </section>
          {/*
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Pricing
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      !*/}
          <section className="section bg-gray" id="section-pricing" name="section-pricing">
            <div className="container">
              <header className="section-header">
                <h2>Affordable Pricing</h2>
                <hr />
                <p className="lead">Slack for Teams is a single workspace for your small- to medium-sized company or team.</p>
              </header>
              <div className="row gap-y text-center">
                <div className="col-12 col-md-4">
                  <div className="pricing-1">
                    <p className="plan-name">Free</p>
                    <br />
                    <h2 className="price">free</h2>
                    <p><small className="opacity-50">Forever!</small></p>
                    <small>Searchable messages up to 10K</small><br />
                    <small>10 apps or service integrations</small><br />
                    <small>5GB total file storage for the team</small><br />
                    <br />
                    <p className="text-center py-3"><a className="btn btn-primary" href>Get started</a></p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="pricing-1">
                    <p className="plan-name">Standard</p>
                    <br />
                    <h2 className="price text-success"><span className="price-unit">$</span> 6.67</h2>
                    <p><small className="opacity-50">Per user/month</small></p>
                    <small>Unlimited searchable message archives</small><br />
                    <small>Unlimited apps and service integrations</small><br />
                    <small>10GB file storage per team member</small><br />
                    <br />
                    <p className="text-center py-3"><a className="btn btn-success" href>Get started</a></p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="pricing-1">
                    <p className="plan-name">Plus</p>
                    <br />
                    <h2 className="price"><span className="price-unit">$</span> 12.50</h2>
                    <p><small className="opacity-50">Per user/month</small></p>
                    <small>Everything in Free &amp; Standard, and</small><br />
                    <small>SAML-based single sign-on (SSO)</small><br />
                    <small>Compliance Exports of all messages</small><br />
                    <br />
                    <p className="text-center py-3"><a className="btn btn-primary" href>Get started</a></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Partners
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      !*/}
          <section className="section bg-gray py-40">
            <div className="container">
              <div className="partner partner-sm">
                <img src={require('./img/partner-1.png')} alt="..." />
                <img src={require('./img/partner-2.png')} alt="..." />
                <img src={require('./img/partner-3.png')} alt="..." />
                <img src={require('./img/partner-4.png')} alt="..." />
                <img src={require('./img/partner-5.png')} alt="..." />
                <img src={require('./img/partner-6.png')} alt="..." />
              </div>
            </div>
          </section>
          {/*
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | FAQ
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      !*/}
          <section className="section" id="section-faq">
            <div className="container">
              <header className="section-header">
                <small>Faq</small>
                <h2>Frequently Asked Questions</h2>
                <hr />
                <p className="lead">Drop us an email if you couldn't find an answert to your question in the following list.</p>
              </header>
              <div className="row gap-y gap-3">
                <div className="col-12 col-md-6 col-lg-4">
                  <h6 className="fw-400">What is TheSaaS?</h6>
                  <p>It is a collection of layouts, design patterns, components, and guidelines for creating admin templates, SaaS startups, and complex dashboards.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <h6 className="fw-400">How long does it take?</h6>
                  <p>It is a collection of layouts, design patterns, components, and guidelines for creating admin templates, SaaS startups, and complex dashboards.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <h6 className="fw-400">What payment services do you support?</h6>
                  <p>We accept all major credit cards.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <h6 className="fw-400">Can I update my card details?</h6>
                  <p>Yes. Go to the billing section of your dashboard and update your payment information.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <h6 className="fw-400">Can I cancel my subscription?</h6>
                  <p>You can cancel your subscription at any time. Cancelling your plan comes into effect the following month.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <h6 className="fw-400">Can I get refund?</h6>
                  <p>Unfortunately, not at this time! Please try our free plan for a while to make sure Helpato is what you want.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <h6 className="fw-400">What if I want to change plans?</h6>
                  <p>It's quick and easy to switch between our different pricing plans from your dashboard.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <h6 className="fw-400">How long are your contracts?</h6>
                  <p>You can upgrade, downgrade, or cancel your monthly account at any time with no further obligation.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <h6 className="fw-400">Other questions?</h6>
                  <p>We're always available at support@domain.com</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* END Main container */}
        {/* Footer */}
        <footer className="site-footer">
          <div className="container">
            <div className="row gap-y align-items-center">
              <div className="col-12 col-lg-3">
                <p className="text-center text-lg-left">
                  WORLDCLASS
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <ul className="nav nav-primary nav-hero">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog.html">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="block-feature.html">Features</a>
                  </li>
                  <li className="nav-item hidden-sm-down">
                    <a className="nav-link" href="page-pricing.html">Pricing</a>
                  </li>
                  <li className="nav-item hidden-sm-down">
                    <a className="nav-link" href="page-contact.html">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-3">
                <div className="social text-center text-lg-right">
                  <a className="social-facebook" href="https://www.facebook.com/thethemeio"><i className="fa fa-facebook" /></a>
                  <a className="social-twitter" href="https://twitter.com/thethemeio"><i className="fa fa-twitter" /></a>
                  <a className="social-instagram" href="https://www.instagram.com/thethemeio/"><i className="fa fa-instagram" /></a>
                  <a className="social-dribbble" href="https://dribbble.com/thethemeio"><i className="fa fa-dribbble" /></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* END Footer */}
      </div>
    );
  }
}

export default App;
