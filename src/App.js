import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './App.css';
import './css/react-tabs.css';

const styles = {
  getStartedButton: {
    padding: 14,
    margin: 16,
    height: 40,
    lineHeight: 1,
    verticalAlign: 'baseline'
  }
}

const TAB_IMAGE_HEIGHT = 330

const tabs = [
  "Mobile First",
  "Integrations",
  "Analytics",
  "Customization",
  "User Management",
  "More"
]


const tabData = {
  "Mobile First": {
    image: (<img style={{height: TAB_IMAGE_HEIGHT, width: 'auto'}} src={require('./img/mobile-first.png')} alt="..." />),
    text: (
      <p>
        Let your users take their courses on the go with our iOS and Android apps <a href="https://itunes.apple.com/app/worldclass-io/id998470733?mt=8" target="_blank"><img src={require('./img/app-store-logo.png')} alt="App Store Logo" /></a> <a href="https://play.google.com/store/apps/details?id=com.codelovers.worldclass&hl=en" target="_blank"><img src={require('./img/google-play-logo.png')} alt="Google Play Logo" /></a>.
Full support for HD video streaming across devices, advanced assessments, gamification and more.
You can also publish your own branded mobile apps with us and get full control over your app’s branding, pricing and access.

      </p>
    )
  },
  "Integrations": {
    image: (<img style={{height: TAB_IMAGE_HEIGHT, width: 'auto'}} src={require('./img/integrations.png')} alt="..." />),
    text: (
      <p>Connect your academy to over 500 other web apps! Integrate with google docs, sheets, Salesforce, Mailchimp or any other software you’re using to promote and track your business.
        <br/><br/>Target users with individualized emails and discounts, build dashboards or create sophisticated onboarding flows - the only limit is your imagination!</p>
    )
  },
  "Analytics": {
    image: (<img style={{height: TAB_IMAGE_HEIGHT, width: 'auto'}} src={require('./img/analytics.png')} alt="..." />),
    text: (
      <p>
        Get full activity reports and detailed timeline of every single user, group and course in your academy.
Beyond aggregated reports, you and your team can also see individual users’ performance and review their actual assessments down to the most granular level.
      </p>
    )
  },
  "Customization": {
    image: (<img style={{height: TAB_IMAGE_HEIGHT, width: 'auto'}} src={require('./img/customization.png')} alt="..." />),
    text: (
      <p>
        Get full control over your academy’s look and feel.
Use our built-in editor to include logos, change colours and layouts and if you happen to code, you can use our CSS and HTML editor to redesign the interface as you see fit. You can use your own custom domain or buy one from us.
<b>WorldClass is 100% white-label</b> and is completely transparent to your users.
      </p>
    )
  },
  "User Management": {
    image: (<img style={{height: TAB_IMAGE_HEIGHT, width: 'auto'}} src={require('./img/user-management.png')} alt="..." />),
    text: (
      <p>
        Set your academy to private or public.
Make it ‘invite only’ or open for self-signups. Invite your staff and other admins to collaborate online.
Assign users to groups and control exactly what courses are open to them and when. Our advanced users management module can support your use case whether it’s top-secret enterprise training, a marketplace or an open to all online course
      </p>
    )
  },
  "More": {
    content: (
      <div className="container">
        <div className="row gap-y">
          <div className="col-12 col-lg-4">
            <div className="card card-bordered text-center">
              <div className="card-block">
                <p><i className="icon-layers fs-50 text-muted" /></p>
                <h4 className="card-title">Localization</h4>
                <p className="card-text">WorldClass supports 30+ languages and additional languages can be added upon request.
Interested in adding a specific language?</p>
                <a className="fw-600 fs-12" href="mailto:support@worldclass.io">Ask us how <i className="fa fa-chevron-right fs-9 pl-5" /></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card card-bordered text-center">
              <div className="card-block">
                <p><i className="icon-chat fs-50 text-muted" /></p>
                <h4 className="card-title">Gamification</h4>
                <p className="card-text">Your users earn points and badges based on meaningful activities which keeps them motivated and engaged</p>
                {/*<a className="fw-600 fs-12" href>Read more <i className="fa fa-chevron-right fs-9 pl-5" /></a>*/}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card card-bordered text-center">
              <div className="card-block">
                <p><i className="icon-mic fs-50 text-muted" /></p>
                <h4 className="card-title">Custom Work</h4>
                <p className="card-text">Need anything at all that isn’t mentioned or listed here? Let us know and we’ll build it for you!
We pride ourselves on helping our clients reach their goals. Sometime this means building specific add-ons, connectors, reports or helping them with content import or design services. See that chat bubble on the bottom right? Click it and tell us what you need.</p>
                {/*<a className="fw-600 fs-12" href>Read more <i className="fa fa-chevron-right fs-9 pl-5" /></a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
                {/*<li className="nav-item"><a className="nav-link" href data-scrollto="section-testimonials">Testimonials</a></li>*/}
                <li className="nav-item"><a className="nav-link" href data-scrollto="section-pricing">Pricing</a></li>
                <li className="nav-item"><a className="nav-link" href="https://studio.worldclass.io/#/login" rel="noopener noreferrer" target="_blank">Sign in</a></li>
                <li>
                  <a className="btn btn-lg btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.getStartedButton}
                    href="https://studio.worldclass.io/#/signup">Launch an Academy</a>
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
                <h1>Create, publish and sell beautiful courses online</h1>

                <p>
                  Get your fully branded course website going in minutes.<br/>
                  Whether you're an individual instructor, a team leader or an enterprise -
                  WorldClass has you covered!
                </p>
                <br />
                <p className="lead mx-auto" />
                <br />
                <a className="btn btn-lg btn-primary" href="https://studio.worldclass.io/#/signup">Get Started</a>
                <p className="pt-8"><small>Already have an account? <a className="text-muted" href="page-login.html">Sign in</a></small></p>
              </div>
              <div className="col-12 col-lg-6 offset-lg-1 img-outside-right hidden-md-down">
                <img className="" src={require('./img/dashboard.jpg')} alt="..." />
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
                <h2>Everything you need to create and sell courses online</h2>
                <hr />
              </header>
              <div className="row gap-y align-items-center">
                <div className="col-12 col-md-5 text-center">
                  <img src={require('./img/drag.png')} alt="Drag and drop" className="box-shadow" />
                </div>
                <div className="col-12 offset-md-1 col-md-6">
                  <h5>Drag & Drop Course Builder.</h5>
                  <p>Add texts, images, videos, files, polls, questions and virtually anything else you can think of with our intuitive course builder.</p>
                </div>
              </div>
              <hr className="w-200 my-90" />
              <div className="row gap-y align-items-center">
                <div className="col-12 col-md-6">
                  <h5>Advanced quizzes and assesments</h5>
                  <p>Create graded simulation exams or simple practive ones. Single or multi-chapter tests with or without time limits.</p>
                  <p>Your users will get exact stats, progress reports and suggestions for what to practice next.</p>
                </div>
                <div className="col-12 offset-md-1 col-md-5 text-center">
                  <img src={require('./img/everywhere.png')} alt="" className="box-shadow" />
                </div>
              </div>
              <hr className="w-200 my-90" />
              <div className="row gap-y align-items-center">
                <div className="col-12 col-md-5 text-center">
                  <img src={require('./img/credit-card.png')} style={{height: 250}} alt="..." />
                </div>
                <div className="col-12 offset-md-1 col-md-6">
                  <h5>Instant Payouts, No Comissions!</h5>
                  <p>Integrate with your Stripe, Paypal or Instamojo account and collect payments from your users around the world. Funds are transferred directly to your account with no added sales commission.</p>
                  <img src={require('./img/payment-methods.png')} alt="Available payment methods" />
                  <hr style={{margin: '1rem auto'}}/>

                  <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">
                    <img src={require('./img/logo-stripe.png')} alt="Stripe logo" style={{height: 20, marginRight: 20}} />
                  </a>
                  <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
                    <img src={require('./img/logo-paypal.png')} alt="PayPal logo" style={{height: 20, marginRight: 20}} />
                  </a>
                  <a href="https://www.instamojo.com/" target="_blank" rel="noopener noreferrer">
                    <img src={require('./img/logo-instamojo.png')} alt="Instamojo logo" style={{height: 20}} />
                  </a>
                </div>
              </div>

            </div>

          </section>

          {/*
          |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
          | Tabs
          |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
          !*/}
          <section className="section bg-gray">
            <div className="container">
              <div className="row gap-y align-items-center">
                <div className="col-12 col-md-12">
                  <Tabs>
                    <TabList className="text-center" style={{marginBottom: 50}}>
                      {
                        tabs.map((t, i) => <Tab key={"t_" + i} style={{
                          cursor: 'pointer'
                        }}>
                          {t}
                        </Tab>)
                      }
                    </TabList>

                    {
                      tabs.map((t, i) =>
                        <TabPanel key={"tp_" + i}>
                          {
                            tabData[tabs[i]].content ?
                            tabData[tabs[i]].content :
                            <div className="row gap-y align-items-center">
                              <div className="col-12 col-md-6 text-center">
                                {tabData[tabs[i]].image}
                              </div>
                              <div className="col-12 offset-md-1 col-md-5">
                                <h2>{tabs[i]}</h2>
                                {tabData[tabs[i]].text}
                              </div>
                            </div>
                          }

                        </TabPanel>
                      )
                    }

                  </Tabs>
                </div>
              </div>
            </div>
          </section>


          {/*
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Features
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      !*/}
          {/*<section className="section">
            <div className="container">
              <div className="row gap-y">
                <div className="col-12 col-lg-4">
                  <div className="card card-bordered text-center bg-gray">
                    <div className="card-block">
                      <p><i className="icon-layers fs-50 text-muted" /></p>
                      <h4 className="card-title">Channels</h4>
                      <p className="card-text">Organize your team conversations in open channels. Make a channel for a project, a team, or everyone has a transparent view.</p>
                      <a className="fw-600 fs-12" href>Read more <i className="fa fa-chevron-right fs-9 pl-5" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card card-bordered text-center bg-gray">
                    <div className="card-block">
                      <p><i className="icon-chat fs-50 text-muted" /></p>
                      <h4 className="card-title">Direct Messages</h4>
                      <p className="card-text">Send messages directly to another and any person or to a small group of people for more focused conversations.</p>
                      <a className="fw-600 fs-12" href>Read more <i className="fa fa-chevron-right fs-9 pl-5" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card card-bordered text-center bg-gray">
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
          </section>*/}
          {/*
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Reclaim your workday
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      !*/}

          <section className="section text-center worldmap-bg" id="section-testimonials" name="section-testimonials">
            <div className="container">
              <header className="section-header">
                <small>Testimonials</small>
                <h2>WorldClass powers educators and entrepreneurs around the world</h2>
              </header>
            </div>
            <div className="container">
              <div className="row" style={{marginBottom: 30}}>
                <div className="col-12 col-md-4 stat stat">
                  <h3 className="text-primary">10,000+<br/><small>Active Academies</small></h3>
                </div>
                <div className="col-12 col-md-4 stat stat">
                  <h3 className="text-primary">1,500,000+<br/><small>Active Users</small></h3>
                </div>
                <div className="col-12 col-md-4 stat stat">
                  <h3 className="text-primary">230,000,000+<br/><small>Course minutes taken</small></h3>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row gap-y">
                <div className="col-12 col-lg-4">
                  <div className="card card-bordered text-center testimonial">
                    <div className="card-block">
                      <p className="card-text">Worldclass has enabled me to achieve something I had only dreamed of- creating and selling my own course online.  It was easier than I expected! Unbelievable customer service.</p>
                    </div>
                    <div className="card-footer">
                      <img className="person" src={require("./img/testimonials/bryan.jpg")} alt="Wysebridge" />
                      <h5>Applicant Coaching Services</h5>
                      <small><a href="http://www.applicantcoaching.ca/police-pati-test.html">www.applicantcoaching.ca</a></small>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card card-bordered text-center testimonial">
                    <div className="card-block">
                      <p className="card-text">It’s rare to find a good product backed by a good team.  It’s even rarer to find all of that backed by individuals who personally root for and work towards your and your company’s success.</p>
                    </div>
                    <div className="card-footer">
                      <img className="person" src={require("./img/testimonials/bryan.jpg")} alt="Wysebridge" />
                      <h5>Wysebridge, LLC</h5>
                      <small><a href="http://www.wysebridge.com/">www.wysebridge.com</a></small>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="card card-bordered text-center testimonial">
                    <div className="card-block">
                      <p className="card-text">Worldclass has enabled me to achieve something I had only dreamed of- creating and selling my own course online.  It was easier than I expected! Unbelievable customer service.</p>
                    </div>
                    <div className="card-footer">
                      <img className="person" src={require("./img/testimonials/bryan.jpg")} alt="Wysebridge" />
                      <h5>Tina Roth Eisenberg</h5>
                      <small>Designer, Founder of Tattly</small>
                    </div>
                  </div>
                </div>
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
                    <p className="plan-name">PRO</p>
                    <br />
                    <h2 className="price text-primary"><span className="price-unit">$</span> 10</h2>
                    <p><small className="opacity-50">Per month</small></p>
                    <small>Searchable messages up to 10K</small><br />
                    <small>10 apps or service integrations</small><br />
                    <small>5GB total file storage for the team</small><br />
                    <br />
                    <p className="text-center py-3"><a className="btn btn-primary" href>Get started</a></p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="pricing-1">
                    <p className="plan-name">TEAM</p>
                    <br />
                    <h2 className="price text-primary"><span className="price-unit">$</span> 30</h2>
                    <p><small className="opacity-50">Per month</small></p>
                    <small>Unlimited searchable message archives</small><br />
                    <small>Unlimited apps and service integrations</small><br />
                    <small>10GB file storage per team member</small><br />
                    <br />
                    <p className="text-center py-3"><a className="btn btn-primary" href>Get started</a></p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="pricing-1" style={{position: 'relative'}}>
                    <p className="plan-name">Plus</p>
                    <br />
                    <p style={{position: 'absolute', width: '100%', textAlign: 'center', marginTop: -5, color: '#aaa'}}>Starting at</p>
                    <h2 className="price"><span className="price-unit">$</span> 200</h2>
                    <p><small className="opacity-50">Per month</small></p>
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
                {/*<img src={require('./img/partner-1.png')} alt="..." />
                <img src={require('./img/partner-2.png')} alt="..." />
                <img src={require('./img/partner-3.png')} alt="..." />
                <img src={require('./img/partner-4.png')} alt="..." />
                <img src={require('./img/partner-5.png')} alt="..." />
                <img src={require('./img/partner-6.png')} alt="..." />*/}
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
