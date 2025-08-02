
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Detect user's browser theme preference on component mount
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(prefersDark)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className={`relative text-center border rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm w-full max-w-sm sm:max-w-md lg:max-w-lg transition-colors duration-300 ${
        isDarkMode 
          ? 'border-gray-700 bg-gray-800 text-white' 
          : 'border-gray-200 bg-white text-gray-900'
      }`}>
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-3 rounded-full transition-colors duration-200 ${
            isDarkMode 
              ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>
            </svg>
          )}
        </button>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 pr-12 sm:pr-0">Ilanchezhian M</h1>
        
        <div className="space-y-3 sm:space-y-4">
          {/* Portfolio */}
          <a href="https://portfoliofinal-rho.vercel.app/" target="_blank" rel="noopener noreferrer"
             className={`group flex items-center justify-start space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25 ${
               isDarkMode 
                 ? 'border-teal-500 bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-500 hover:to-teal-600' 
                 : 'border-teal-200 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-800 hover:from-teal-100 hover:to-teal-200'
             }`}>
            <svg className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${isDarkMode ? 'text-white' : 'text-teal-600'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 15H4V8h16v11z"/>
              <path d="M12 10h-2v2H8v2h2v2h2v-2h2v-2h-2v-2z"/>
            </svg>
            <span className="font-medium flex-1 text-center text-sm sm:text-base transition-all duration-300 group-hover:font-semibold">Portfolio</span>
          </a>

          {/* GitHub */}
          <a href="https://github.com/ilanchezhian-m" target="_blank" rel="noopener noreferrer" 
             className={`group flex items-center justify-start space-x-1 sm:space-x-1 p-3 sm:p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/25 ${
               isDarkMode 
                 ? 'border-gray-600 bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-500 hover:to-gray-600' 
                 : 'border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 hover:from-gray-100 hover:to-gray-200'
             }`}>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span className="font-medium flex-1 text-center text-sm sm:text-base transition-all duration-300 group-hover:font-semibold">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ilanchezhian27/" target="_blank" rel="noopener noreferrer"
             className={`group flex items-center justify-start space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 ${
               isDarkMode 
                 ? 'border-blue-500 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600' 
                 : 'border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 hover:from-blue-100 hover:to-blue-200'
             }`}>
            <svg className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${isDarkMode ? 'text-white' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="font-medium flex-1 text-center text-sm sm:text-base transition-all duration-300 group-hover:font-semibold">LinkedIn</span>
          </a>

          {/* X (Twitter) */}
          <a href="https://x.com/ilanchezhian27" target="_blank" rel="noopener noreferrer"
             className={`group flex items-center justify-start space-x-4 sm:space-x-6 p-3 sm:p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/25 ${
               isDarkMode 
                 ? 'border-gray-600 bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-500 hover:to-gray-600' 
                 : 'border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 hover:from-gray-100 hover:to-gray-200'
             }`}>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="font-medium flex-1 text-center text-sm sm:text-base transition-all duration-300 group-hover:font-semibold">X (Twitter)</span>
          </a>


          {/* Gmail */}
          <a href="https://mail.google.com/mail/?view=cm&to=ilanchezhian27@gmail.com" target="_blank" rel="noopener noreferrer"
             className={`group flex items-center justify-start -space-x-1 sm:-space-x-2 p-3 sm:p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 ${
               isDarkMode 
                 ? 'border-red-500 bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600' 
                 : 'border-red-200 bg-gradient-to-r from-red-50 to-red-100 text-red-800 hover:from-red-100 hover:to-red-200'
             }`}>
            <svg className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${isDarkMode ? 'text-white' : 'text-red-600'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.909L12 10.09l8.455-6.269h1.909c.904 0 1.636.732 1.636 1.636z"/>
            </svg>
            <span className="font-medium flex-1 text-center text-sm sm:text-base transition-all duration-300 group-hover:font-semibold">Gmail</span>
          </a>
          
          {/* Discord */}
          <a href="https://discord.com/users/700992362687758387" target="_blank" rel="noopener noreferrer"
             className={`group flex items-center justify-start space-x-1 p-3 sm:p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25 ${
               isDarkMode 
                 ? 'border-indigo-500 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-500 hover:to-indigo-600' 
                 : 'border-indigo-200 bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-800 hover:from-indigo-100 hover:to-indigo-200'
             }`}>
            <svg className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${isDarkMode ? 'text-white' : 'text-indigo-600'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span className="font-medium flex-1 text-center text-sm sm:text-base transition-all duration-300 group-hover:font-semibold">Discord</span>
          </a>

          {/* Resume */}
          <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer"
             className={`group flex items-center justify-start space-x-1 p-3 sm:p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 ${
               isDarkMode 
                 ? 'border-green-500 bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-500 hover:to-green-600' 
                 : 'border-green-200 bg-gradient-to-r from-green-50 to-green-100 text-green-800 hover:from-green-100 hover:to-green-200'
             }`}>
            <svg className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${isDarkMode ? 'text-white' : 'text-green-600'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              <path d="M8,12H16V14H8V12M8,16H13V18H8V16Z"/>
            </svg>
            <span className="font-medium flex-1 text-center text-sm sm:text-base transition-all duration-300 group-hover:font-semibold">Resume</span>
          </a>

        
        </div>
      </div>
    </div>
  )
}

export default App
