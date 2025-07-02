import React from 'react';
import AppNavbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TrustedBySection from '../components/TrustedBySection';
import ModernTeamsSection from '../components/ModernTeamsSection';
import ProductDirectionSection from '../components/ProductDirectionSection';
import ProjectManagementSection from '../components/ProjectManagementSection';
import IdeateSection from '../components/IdeateSection';
import IssueTrackingSection from '../components/IssueTrackingSection';
import LinearInsightsSection from '../components/LinearInsightsSection';
import AISection from '../components/AISection';
import MCPSection from '../components/MCPSection';

const LandingPage = () => (
  <>
    <AppNavbar />
    <HeroSection />
    <TrustedBySection />
    <ModernTeamsSection />
    <ProductDirectionSection />
    <ProjectManagementSection />
    <IdeateSection />
    <IssueTrackingSection />
    <LinearInsightsSection />
    <AISection />
    <MCPSection />
    <div style={{ height: '50vh' }} />
  </>
);

export default LandingPage;
