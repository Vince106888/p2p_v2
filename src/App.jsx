import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Stratizen from './pages/Stratizen';
import Forum from './pages/Forum';
import TopicPage from './pages/TopicPage';
import Messages from './pages/Messages';
import Marketplace from './pages/Marketplace';
import Auth from './pages/Auth';
import MainLayout from './layouts/MainLayout';
import Mentorship from './pages/Mentorship';
import StudyHub from './pages/StudyHub'; // 🆕 StudyHub main page
import QuestionPage from './pages/QuestionPage'; // 🆕 Q&A view
import ResourceLibrary from './pages/ResourceLibrary';
import InnovationHub from './pages/InnovationHub';
import CareersPage from './pages/CareersPage';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <img src="/logo.png" className="logo react" alt="React logo" />
        <h1>Welcome to Stratizen P2P Student Platform</h1>
      </header>

      <main className="app-main">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Auth />} />
          <Route path="/auth" element={<Auth />} />

          {/* Protected/Internal Routes with Sidebar */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stratizen" element={<Stratizen />} />
            <Route path="/studyhub" element={<StudyHub />} /> {/* ✅ ADD THIS HERE */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/forum/:topicId" element={<TopicPage />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/questions/:id" element={<QuestionPage />} /> {/* 🆕 Q&A Page */}
            <Route path="/resource-library" element={<ResourceLibrary />} />
            <Route path="/innovation" element={<InnovationHub />} />
            <Route path="/careers" element={<CareersPage />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Auth />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p className="read-the-docs">Empowering students with tech & community.</p>
      </footer>
    </div>
  );
}

export default App;
