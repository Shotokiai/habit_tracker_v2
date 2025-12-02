import { useState, useEffect } from "react"

interface FirstUserFormProps {
  onSubmit: (user: { username: string; email: string; age: number }) => void
}

interface SavedUser {
  username: string;
  email: string;
  age: number;
}

export default function FirstUserForm({ onSubmit }: FirstUserFormProps) {
  const [username, setUsername] = useState("")
  const [age, setAge] = useState<number | "">("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [savedUsers, setSavedUsers] = useState<SavedUser[]>([])
  const [showLogin, setShowLogin] = useState(false)

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
    // POST to our API which forwards to SheetDB
    ;(async () => {
      try {
        const res = await fetch('/api/register-user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, age, email }),
        })
        if (!res.ok) {
          const json = await res.json().catch(() => ({}))
          setError(json.error || 'Failed to register')
          return
        }
        
        // Save user to localStorage for future logins
        const newUser = { username, age: age as number, email }
        const updatedUsers = [...savedUsers.filter(u => u.email !== email), newUser]
        localStorage.setItem('savedUsers', JSON.stringify(updatedUsers))
        
        // success
        onSubmit(newUser)
      } catch (err) {
        console.error(err)
        setError('Network error')
      }
    })()
  }

  const handleUserLogin = (user: SavedUser) => {
    onSubmit(user)
  }

  return (
    <div 
      className="flex items-center justify-center min-h-screen p-4"
      style={{ backgroundColor: '#f3f4f6' }}
    >
      <div 
        className="w-full max-w-sm rounded-xl shadow-lg p-8 text-center"
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* App Icon */}
        <div className="mb-6">
          <div 
            className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)' }}
          >
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>

        {!showLogin ? (
          <>
            {/* Header */}
            <h1 
              className="text-2xl font-bold mb-2"
              style={{ color: '#1f2937' }}
            >
              Join Our Community
            </h1>
            <p 
              className="mb-8"
              style={{ color: '#6b7280' }}
            >
              Become part of something great
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="What's your name?"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full px-4 py-3 border-0 rounded-lg"
                style={{
                  backgroundColor: '#f9fafb',
                  color: '#374151',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.outline = '2px solid #22d3ee'}
                onBlur={(e) => e.target.style.outline = 'none'}
                required
              />
              
              <div className="relative">
                <select
                  value={age}
                  onChange={e => setAge(Number(e.target.value))}
                  className="w-full px-4 py-3 border-0 rounded-lg appearance-none"
                  style={{
                    backgroundColor: '#f9fafb',
                    color: age === '' ? '#9ca3af' : '#374151',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.outline = '2px solid #22d3ee'}
                  onBlur={(e) => e.target.style.outline = 'none'}
                  required
                >
                  <option value="" style={{ color: '#9ca3af' }}>How old are you?</option>
                  {Array.from({ length: 66 }, (_, i) => 15 + i).map(num => (
                    <option key={num} value={num} style={{ color: '#374151' }}>{num}</option>
                  ))}
                </select>
                <span 
                  className="pointer-events-none absolute inset-y-0 right-3 flex items-center"
                  style={{ color: '#9ca3af' }}
                >
                  ▼
                </span>
              </div>
              
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-0 rounded-lg"
                style={{
                  backgroundColor: '#f9fafb',
                  color: '#374151',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.outline = '2px solid #22d3ee'}
                onBlur={(e) => e.target.style.outline = 'none'}
                required
              />
              
              {error && (
                <div 
                  className="text-sm text-center"
                  style={{ color: '#ef4444' }}
                >
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full px-4 py-3 font-semibold rounded-lg transition-all"
                style={{
                  background: isFormFilled 
                    ? 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)' 
                    : '#d1d5db',
                  color: isFormFilled ? '#ffffff' : '#6b7280',
                  cursor: isFormFilled ? 'pointer' : 'not-allowed',
                  boxShadow: isFormFilled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
                }}
                disabled={!isFormFilled}
              >
                Let's Go!
              </button>
            </form>

            {/* Login Option for Returning Users */}
            {savedUsers.length > 0 && (
              <div 
                className="mt-6 pt-4"
                style={{ borderTop: '1px solid #e5e7eb' }}
              >
                <p 
                  className="text-sm mb-2"
                  style={{ color: '#6b7280' }}
                >
                  Been here before?{' '}
                  <button
                    onClick={() => setShowLogin(true)}
                    className="font-medium hover:underline"
                    style={{ color: '#22d3ee' }}
                  >
                    Log In
                  </button>
                </p>
              </div>
            )}
          </>
        ) : (
          // Login Screen for Returning Users
          <>
            <h1 
              className="text-2xl font-bold mb-2"
              style={{ color: '#1f2937' }}
            >
              Welcome Back!
            </h1>
            <p 
              className="mb-6"
              style={{ color: '#6b7280' }}
            >
              Select your account to continue
            </p>

            <div className="space-y-3">
              {savedUsers.map((user, index) => (
                <button
                  key={index}
                  onClick={() => handleUserLogin(user)}
                  className="w-full p-4 rounded-lg text-left transition-colors border"
                  style={{
                    backgroundColor: '#f9fafb',
                    borderColor: '#e5e7eb'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.borderColor = '#22d3ee';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                    e.currentTarget.style.borderColor = '#e5e7eb';
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                      style={{ background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)' }}
                    >
                      {user.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div 
                        className="font-medium"
                        style={{ color: '#1f2937' }}
                      >
                        {user.username}
                      </div>
                      <div 
                        className="text-sm"
                        style={{ color: '#6b7280' }}
                      >
                        {user.email}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowLogin(false)}
              className="mt-4 text-sm font-medium"
              style={{ color: '#6b7280' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#22d3ee'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6b7280'}
            >
              ← Back to Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  )
}
