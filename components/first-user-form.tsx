import { useState } from "react"

interface FirstUserFormProps {
  onSubmit: (user: { username: string; email: string; age: number }) => void
}


export default function FirstUserForm({ onSubmit }: FirstUserFormProps) {
  const [username, setUsername] = useState("")
  const [age, setAge] = useState<number | "">("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [error, setError] = useState("")

  const isFormFilled = username.trim() && age !== "" && email.trim();

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
        // success
        onSubmit({ username, age, email })
      } catch (err) {
        console.error(err)
        setError('Network error')
      }
    })()
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="w-full max-w-xs mx-auto bg-card rounded-lg shadow-md border border-foreground/10 p-0 relative flex flex-col items-center">
        {/* Mobile vertical background section */}
        <div className="absolute inset-0 h-1/3 w-full bg-gradient-to-b from-primary/30 to-transparent rounded-t-lg z-0" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 w-full z-10">
          <h2 className="text-lg font-bold text-center">Welcome! Tell us about yourself</h2>
          <input
            type="text"
            placeholder="Your name"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="px-4 py-2 border border-foreground/20 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <div className="relative">
            <select
              value={age}
              onChange={e => setAge(Number(e.target.value))}
              className="px-4 py-2 pr-10 border border-foreground/20 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full appearance-none"
              required
            >
              <option value="">Your age</option>
              {Array.from({ length: 66 }, (_, i) => 15 + i).map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground">
              ▼
            </span>
          </div>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="px-4 py-2 border border-foreground/20 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          {error && <div className="text-destructive text-sm text-center">{error}</div>}
          <button
            type="submit"
            className={`w-full px-4 py-2 font-semibold rounded-lg transition-opacity border mt-2 ${isFormFilled ? 'bg-primary text-primary-foreground border-primary hover:opacity-90' : 'bg-muted text-muted-foreground border-muted cursor-not-allowed'}`}
            disabled={!isFormFilled}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}
