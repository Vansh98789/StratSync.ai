import React, { useState } from 'react';
import { ArrowRight, Moon, Sun, Users, TrendingUp, Shield, Target, Brain, Zap, CheckCircle, Star, Mail, Phone, MapPin } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, isDark }) => (
  <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-2xl border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
    <div className={`${isDark ? 'bg-gradient-to-r from-teal-500 to-emerald-500' : 'bg-gradient-to-r from-teal-600 to-emerald-600'} p-4 rounded-xl w-fit mb-6`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>{title}</h3>
    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{description}</p>
  </div>
);

const TestimonialCard = ({ name, role, company, quote, rating, isDark }) => (
  <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-2xl border hover:shadow-xl transition-all duration-300`}>
    <div className="flex mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} italic mb-6 leading-relaxed`}>"{quote}"</p>
    <div className={`${isDark ? 'border-gray-700' : 'border-gray-200'} border-t pt-4`}>
      <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{name}</p>
      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{role}</p>
      <p className={`text-sm ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>{company}</p>
    </div>
  </div>
);



export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
    
    
    
      {/* Header */}
      <header className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-50 backdrop-blur-sm`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img src="/logo.jpg" alt="StratSync Logo" className="h-10 w-10" />
                
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                StratSync
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className={`hover:text-teal-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Features</a>
              <a href="#testimonials" className={`hover:text-teal-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Testimonials</a>
              <a href="#contact" className={`hover:text-teal-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-2 rounded-lg hover:from-teal-600 hover:to-emerald-600 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>





      {/* Hero Section */}
      <section className={`${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-50'} py-20`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Revenue Retention{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Copilot
            </span>
          </h2>
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            AI-powered customer success platform that predicts churn, identifies expansion opportunities, and drives sustainable revenue growth through intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className={`${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'} px-8 py-4 rounded-xl font-semibold border transition-all duration-300`}>
              Watch Demo
            </button>
          </div>
        </div>
      </section>






      {/* Features Section */}
      <section id="features" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Powerful Features for Customer Success
            </h3>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Everything you need to retain customers and drive revenue growth through intelligent insights and automation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI-Powered Churn Prediction"
              description="Advanced machine learning algorithms analyze customer behavior patterns to predict churn risk up to 90 days in advance with 95% accuracy."
              isDark={isDark}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Revenue Expansion Opportunities"
              description="Identify upsell and cross-sell opportunities automatically based on usage patterns, customer health scores, and behavioral triggers."
              isDark={isDark}
            />
            <FeatureCard
              icon={Target}
              title="Smart Segmentation"
              description="Automatically segment customers based on health scores, engagement levels, and expansion potential for targeted outreach campaigns."
              isDark={isDark}
            />
            <FeatureCard
              icon={Zap}
              title="Automated Workflows"
              description="Create intelligent workflows that trigger actions based on customer health changes, usage patterns, and risk indicators."
              isDark={isDark}
            />
            <FeatureCard
              icon={Shield}
              title="Risk Mitigation"
              description="Proactive alerts and recommendations help your team address potential issues before they impact customer satisfaction."
              isDark={isDark}
            />
            <FeatureCard
              icon={Users}
              title="Team Collaboration"
              description="Centralized dashboard for customer success teams to collaborate on accounts, share insights, and track progress together."
              isDark={isDark}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              What Our Customers Say
            </h3>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Trusted by customer success teams at leading companies worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Chen"
              role="VP of Customer Success"
              company="TechCorp"
              quote="StratSync helped us reduce churn by 40% in just 6 months. The AI predictions are incredibly accurate and actionable."
              rating={5}
              isDark={isDark}
            />
            <TestimonialCard
              name="Michael Rodriguez"
              role="Head of Customer Success"
              company="GrowthLabs"
              quote="The revenue expansion features have been game-changing. We've identified $2M in upsell opportunities we would have missed."
              rating={5}
              isDark={isDark}
            />
            <TestimonialCard
              name="Emily Johnson"
              role="Customer Success Manager"
              company="InnovateNow"
              quote="Finally, a platform that truly understands customer success. The automated workflows save us 20+ hours per week."
              rating={5}
              isDark={isDark}
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              What You Can Expect
            </h3>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Real results from CS teams using StratSync AI
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} p-8 rounded-2xl text-center`}>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl w-fit mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>20%</h4>
              <h5 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Higher retention</h5>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                of at-risk accounts through early intervention
              </p>
            </div>
            <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} p-8 rounded-2xl text-center`}>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl w-fit mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>40%</h4>
              <h5 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Faster CS response</h5>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                on critical tickets and customer issues
              </p>
            </div>
            <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} p-8 rounded-2xl text-center`}>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl w-fit mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Better</h4>
              <h5 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Revenue alignment</h5>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                between collections, ops & customer success
              </p>
            </div>
            <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} p-8 rounded-2xl text-center`}>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl w-fit mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Real-time</h4>
              <h5 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Proactive alerts</h5>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                not post-mortems and reactive firefighting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Works with What You Already Use
            </h3>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Seamlessly integrates with your existing customer success stack
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow`}>
              <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Slack</h4>
            </div>
            <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow`}>
              <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Salesforce</h4>
            </div>
            <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow`}>
              <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>HubSpot</h4>
            </div>
            <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow`}>
              <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Zendesk</h4>
            </div>
            <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow`}>
              <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Xero</h4>
            </div>
            <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow`}>
              <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>NetSuite</h4>
            </div>
            <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow`}>
              <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Zoho</h4>
            </div>
            <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow`}>
              <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Microsoft Teams</h4>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
              Don't see your stack?{' '}
              <button className="text-blue-500 hover:text-blue-400 font-medium">
                Talk to us
              </button>
              {' '}about custom integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Get in Touch
            </h3>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Ready to transform your customer success strategy? Let's discuss how StratSync can help your team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h4 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-teal-500 mr-4" />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>hello@stratsync.ai</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-teal-500 mr-4" />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-teal-500 mr-4" />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-200 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-200 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
                />
              </div>
              <div>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className={`w-full px-4 py-3 rounded-xl border ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-200 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none`}
                />
              </div>
              <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t py-12`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center">
                    <span className="text-white font-bold">S</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  StratSync
                </h3>
              </div>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                AI-powered revenue retention copilot for customer success teams.
              </p>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDark ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors`}>Features</a></li>
                <li><a href="#" className={`${isDark ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors`}>Integrations</a></li>
                <li><a href="#" className={`${isDark ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors`}>API</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDark ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors`}>About</a></li>
                <li><a href="#" className={`${isDark ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors`}>Careers</a></li>
                <li><a href="#" className={`${isDark ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors`}>Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDark ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors`}>Help Center</a></li>
                <li><a href="#" className={`${isDark ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors`}>Community</a></li>
                <li><a href="#" className={`${isDark ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors`}>Contact</a></li>
              </ul>
            </div>
          </div>
          <div className={`${isDark ? 'border-gray-800' : 'border-gray-200'} border-t mt-8 pt-8 text-center`}>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 StratSync. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}