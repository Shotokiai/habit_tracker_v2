import { useState, useEffect } from "react"

interface FirstUserFormProps {
  onSubmit: (user: { username: string; email: string; age: string }) => void
  onBack?: () => void
}

interface SavedUser {
  username: string;
  email: string;
  age: string;
}

export default function FirstUserForm({ onSubmit, onBack }: FirstUserFormProps) {
  const [username, setUsername] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [savedUsers, setSavedUsers] = useState<SavedUser[]>([])
  const [showLogin, setShowLogin] = useState(false)
  const [showAllUsers, setShowAllUsers] = useState(false)

  const isFormFilled = username.trim() && age !== "" && email.trim();

  // Load saved users on component mount
  useEffect(() => {
    const saved = localStorage.getItem('savedUsers')
    if (saved) {
      try {
        const users = JSON.parse(saved)
        setSavedUsers(users)
        if (users.length > 0) {
          setShowLogin(false) // Start with new user form, user can click login if needed
        }
      } catch {
        setSavedUsers([])
      }
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim() || age === "" || !email.trim()) {
      setError("Please fill in all fields.")
      return
    }
    if (!email.trim().endsWith('@gmail.com')) {
      setError("Please enter a valid Gmail address ending with @gmail.com")
      return
    }
    setError("")
    
    // Handle registration asynchronously
    ;(async () => {
      const newUser = { username, age, email }
      
      // Try to POST to our API, but continue even if it fails
      try {
        const res = await fetch('/api/register-user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, age, email }),
        })
        
        if (!res.ok) {
          console.warn('API registration failed, but continuing locally')
        }
      } catch (err) {
        console.warn('Network error during registration, but continuing locally:', err)
      }
      
      // Save user to localStorage for future logins regardless of API status
      const updatedUsers = [...savedUsers.filter(u => u.email !== email), newUser]
      localStorage.setItem('savedUsers', JSON.stringify(updatedUsers))
      
      // Always continue to next step
      onSubmit(newUser)
    })()
  }

  const handleUserLogin = (user: SavedUser) => {
    onSubmit(user)
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-0 m-0 font-sans antialiased">
      <main className="w-[360px] h-[740px] bg-white overflow-hidden relative flex flex-col mx-auto shrink-0">
        <div className="flex-1 flex flex-col px-8 pt-12 pb-12 h-full">
          
          {!showLogin ? (
            <>
              {/* Back Button */}
              <div className="flex items-center justify-start">
                <button
                  onClick={onBack}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>

              {/* Header */}
              <div className="mt-10 mb-8">
                <h1 className="text-[26px] leading-tight font-bold text-gray-900 mb-2 tracking-tight">
                  Join Our Community
                </h1>
                <p className="text-gray-500 text-[15px] font-medium">
                  Become part of something great
                </p>
              </div>

              {/* Form */}
              <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
                <div className="group">
                  <input 
                    className="w-full h-[52px] bg-gray-50 border border-gray-200 rounded-xl px-4 text-[15px] font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200" 
                    placeholder="What's your name?" 
                    type="text" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    required 
                  />
                </div>
                
                <div className="group relative">
                  <select 
                    className="w-full h-[52px] bg-gray-50 border border-gray-200 rounded-xl px-4 pr-10 text-[15px] font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 appearance-none cursor-pointer invalid:text-gray-400" 
                    value={age} 
                    onChange={e => setAge(e.target.value)} 
                    required
                    style={{ 
                      color: age === '' ? '#9CA3AF' : '#111827'
                    }}
                  >
                    <option value="" disabled style={{display: 'none'}}>How old are you?</option>
                    {Array.from({length: 66}, (_, i) => i + 15).map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 flex items-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="group">
                  <input 
                    className="w-full h-[52px] bg-gray-50 border border-gray-200 rounded-xl px-4 text-[15px] font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200" 
                    placeholder="Your email address" 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                
                {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                
                <button 
                  className="mt-4 w-full h-[54px] bg-indigo-500 hover:bg-indigo-600 text-white text-[16px] font-semibold rounded-xl shadow-[0_10px_15px_-3px_rgba(99,102,241,0.3)] active:scale-[0.98] transition-all duration-200 flex items-center justify-center tracking-wide" 
                  type="submit"
                >
                  Let's Go!
                </button>
              </form>

              {/* Footer */}
              <div className="mt-auto mb-1 text-center">
                <p className="text-[14px] text-gray-500 font-medium">
                  Been here before? 
                  <button 
                    className="text-indigo-500 font-bold hover:text-indigo-600 transition-colors ml-1" 
                    onClick={() => setShowLogin(true)}
                    type="button"
                  >
                    Log In
                  </button>
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Back Button with Title */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowLogin(false)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h1 className="text-[19px] font-bold text-gray-900 tracking-tight">
                  Select your account
                </h1>
              </div>

              {/* Spacer to maintain same spacing */}
              <div className="mt-4 mb-4"></div>
              
              {/* Email List Container */}
              <div className={`${showAllUsers && savedUsers.length > 5 ? 'overflow-y-scroll' : ''} space-y-3`} 
                   style={showAllUsers && savedUsers.length > 5 ? {maxHeight: 'calc(100vh - 320px)'} : {}}>
                {savedUsers.length > 0 ? (
                  <>
                    {[...savedUsers].reverse().slice(0, showAllUsers ? savedUsers.length : 5).map((user, index) => (
                      <button
                        key={index}
                        onClick={() => handleUserLogin(user)}
                        className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-xl text-left transition-all duration-200 border border-transparent hover:border-indigo-200"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-gray-900">{user.username}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                          </div>
                          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                          </svg>
                        </div>
                      </button>
                    ))}
                  </>
                ) : (
                  <p className="text-gray-500 text-center py-4">No saved accounts found</p>
                )}
              </div>

              {/* View All Button - Only show when not expanded */}
              {!showAllUsers && savedUsers.length > 5 && (
                <div className="mt-3">
                  <button
                    onClick={() => setShowAllUsers(true)}
                    className="w-full p-3 bg-white border border-gray-300 hover:border-indigo-400 rounded-xl text-center transition-all duration-200 hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm font-medium text-gray-600 hover:text-indigo-600">
                        View All ({savedUsers.length - 5} more)
                      </span>
                      <svg 
                        className="w-4 h-4 text-gray-400 transition-transform duration-200 rotate-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                </div>
              )}
              
              <div className="mt-auto mb-1 text-center">
                <p className="text-[14px] text-gray-500 font-medium">
                  New here? 
                  <button 
                    className="text-indigo-500 font-bold hover:text-indigo-600 transition-colors ml-1" 
                    onClick={() => setShowLogin(false)}
                    type="button"
                  >
                    Create Account
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}