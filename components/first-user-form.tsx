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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8 text-center">
        {/* App Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>

        {!showLogin ? (
          <>
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Join Our Community
            </h1>
            <p className="text-gray-500 mb-8">
              Become part of something great
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="What's your name?"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full px-4 py-3 border-0 bg-gray-50 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
              
              <input
                type="number"
                placeholder="How old are you?"
                value={age}
                onChange={e => setAge(e.target.value ? Number(e.target.value) : "")}
                min="15"
                max="80"
                className="w-full px-4 py-3 border-0 bg-gray-50 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
              
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-0 bg-gray-50 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
              
              {error && <div className="text-red-500 text-sm text-center">{error}</div>}
              
              <button
                type="submit"
                className={`w-full px-4 py-3 font-semibold rounded-lg transition-all ${
                  isFormFilled 
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!isFormFilled}
              >
                Let's Go!
              </button>
            </form>

            {/* Login Option for Returning Users */}
            {savedUsers.length > 0 && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-sm mb-2">
                  Been here before?{' '}
                  <button
                    onClick={() => setShowLogin(true)}
                    className="text-cyan-500 font-medium hover:underline"
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
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome Back!
            </h1>
            <p className="text-gray-500 mb-6">
              Select your account to continue
            </p>

            <div className="space-y-3">
              {savedUsers.map((user, index) => (
                <button
                  key={index}
                  onClick={() => handleUserLogin(user)}
                  className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors border border-gray-200 hover:border-cyan-400"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {user.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">{user.username}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowLogin(false)}
              className="mt-4 text-gray-500 hover:text-cyan-500 text-sm font-medium"
            >
              ← Back to Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  )
}
