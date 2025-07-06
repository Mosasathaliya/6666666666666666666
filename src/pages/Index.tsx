import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Menu, X, Bot, Zap, Users, Globe, CheckCircle, ArrowRight } from "lucide-react";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import BackgroundMusic from "@/components/BackgroundMusic";
import MusicSplashAnimation from "@/components/MusicSplashAnimation";

const features = [
  {
    title: "Built-In LLM (No API Required)",
    description: "Our platform includes a fully integrated, lightweight local LLM option, so users can access AI features without providing external API keys. Ideal for privacy-focused or offline scenarios.",
    icon: <Bot className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    title: "Automation Engine",
    description: "Users can design and deploy powerful business workflows and automations in a few clicks. Integrated automation capabilities allow triggers, scheduling, data flow, and third-party actions all controlled via chat.",
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "Avatar & Video Generation",
    description: "Through a conversational interface, users can instantly generate speaking avatars and narrated videos for their apps, social media, or business use cases. Custom voices and avatars are supported.",
    icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
  },
  {
    title: "Web + Mobile App Deployment",
    description: "Once built, apps can be published instantly to the web or mobile. Users manage their app lifecycle from idea to production without switching platforms.",
    icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    title: "Tool Integration",
    description: "Agents can browse the web, interact with forms, use in-app tools, and access creative features like voiceover generation, dynamic UI building, and smart file handling all in one flow.",
    icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  }
];

const useCases = [
  {
    title: "Educators Building Learning Tools",
    description: "Empower educators to create interactive learning experiences with AI-driven content and personalized feedback.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    title: "Entrepreneurs Launching MVPs",
    description: "Help entrepreneurs quickly prototype and launch minimum viable products using AI-powered tools.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "Agencies Creating Client Workflows",
    description: "Enable agencies to streamline client workflows and automate repetitive tasks with ease.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "Businesses Automating Internal Ops",
    description: "Assist businesses in automating internal operations to increase efficiency and reduce costs.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Creators Making AI-Powered Media",
    description: "Support creators in generating high-quality AI-powered media content for diverse audiences.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  }
];

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <BackgroundMusic />
      <MusicSplashAnimation />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="https://cdn.hero.page/i/08a7f-e36d-2ffd-0a1f-555c23027e3-1000057064.png"
                alt="ORYNX AI LABS Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-contain"
              />
              <div>
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ORYNX AI LABS
                </h1>
                <p className="text-xs text-slate-400 hidden sm:block">Supercharged AI App Builder</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6 lg:space-x-8">
              {['home', 'features', 'about', 'use-cases', 'early-access', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 capitalize text-sm lg:text-base"
                  >
                    {item.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-800">
              <ul className="space-y-3 pt-4">
                {['home', 'features', 'about', 'use-cases', 'early-access', 'contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="block w-full text-left px-2 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-800 rounded transition-colors capitalize"
                    >
                      {item.replace('-', ' ')}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
            <div className="lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-3 sm:px-4 py-2 rounded-full border border-blue-500/20">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-medium">First in Saudi Arabia</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  Supercharged
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    AI App Builder
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Create. Automate. Deploy. All Through Conversation.
                  <br className="hidden sm:block" />
                  Build powerful applications with AI agents that understand your vision.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg animate-pulse-glow"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Started Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 sm:px-8 py-3 text-base sm:text-lg"
                  onClick={() => scrollToSection('features')}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
                  alt="AI Technology"
                  className="rounded-2xl shadow-2xl w-full h-auto max-w-md lg:max-w-none mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Key Features of 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> ORYNX AI LABS</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Revolutionary features that make app development as simple as having a conversation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-900/80 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    {feature.icon}
                    <CardTitle className="text-white text-lg sm:text-xl">{feature.title}</CardTitle>
                  </div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-32 sm:h-48 object-cover rounded-lg"
                  />
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">About Us</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              ORYNX AI LABS is revolutionizing app development by empowering users to create, automate, and deploy applications through conversation. Our platform is the first-of-its-kind in Saudi Arabia and is aligned with Saudi Vision 2030.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <Card className="bg-gradient-to-br from-slate-900 to-blue-900/50 border-slate-700 p-6 sm:p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl sm:text-2xl text-white mb-4">
                  🇸🇦 First Time in Saudi Arabia
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-slate-300">
                  The Most Advanced AI App Builder in the World
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                  alt="Saudi Arabia Innovation"
                  className="w-full h-48 sm:h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  ORYNX AI LABS is pioneering AI-powered app development in Saudi Arabia, setting new standards for innovation and technological advancement in alignment with Vision 2030.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-slate-900/80 p-4 sm:p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">🎯 Our Mission</h3>
                <p className="text-slate-300 text-sm sm:text-base">
                  To democratize app development by making it accessible to everyone through natural conversation, regardless of technical expertise.
                </p>
              </div>
              <div className="bg-slate-900/80 p-4 sm:p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">🚀 Our Vision</h3>
                <p className="text-slate-300 text-sm sm:text-base">
                  To become the leading AI-powered development platform in the Middle East, driving digital transformation across industries.
                </p>
              </div>
              <div className="bg-slate-900/80 p-4 sm:p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">💡 Innovation</h3>
                <p className="text-slate-300 text-sm sm:text-base">
                  Leveraging cutting-edge AI technology to create solutions that were previously impossible, making the complex simple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Use Cases</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how different professionals are leveraging ORYNX AI LABS to transform their work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-slate-900/80 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
                <CardHeader className="p-4 sm:p-6">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-32 sm:h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <CardTitle className="text-white text-lg sm:text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Form */}
      <EarlyAccessForm />

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Contact Us</h2>
            <p className="text-lg sm:text-xl text-slate-300">
              Ready to revolutionize your app development? Let's start the conversation.
            </p>
          </div>
          
          <Card className="bg-slate-900/80 border-slate-700">
            <CardContent className="p-6 sm:p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                  <Input 
                    placeholder="Your Company" 
                    className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    rows={6}
                    className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 text-base sm:text-lg">
                  Send Message
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="https://cdn.hero.page/i/08a7f-e36d-2ffd-0a1f-555c23027e3-1000057064.png"
                alt="ORYNX AI LABS Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-contain"
              />
              <div>
                <h3 className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ORYNX AI LABS
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">© 2024 ORYNX AI LABS. All Rights Reserved.</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
