import { useState } from "react"

interface FirstUserFormProps {
  onSubmit: (user: { username: string; email: string; age: number }) => void
}

export default function FirstUserForm({ onSubmit }: FirstUserFormProps) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim() || !email.trim() || !age) {
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
          body: JSON.stringify({ username, email, age: parseInt(age) }),
        })
        if (!res.ok) {
          const json = await res.json().catch(() => ({}))
          setError(json.error || 'Failed to register')
          return
        }
        // success
        onSubmit({ username, email, age: parseInt(age) })
      } catch (err) {
        console.error(err)
        setError('Network error')
      }
    })()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 max-w-xs mx-auto bg-card rounded-lg shadow-md border border-foreground/10 mt-10">
      <h2 className="text-lg font-bold text-center">Welcome! Tell us about yourself</h2>
      <input
        type="text"
        placeholder="Your name"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="px-4 py-2 border border-foreground/20 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <select
        value={age}
        onChange={e => setAge(e.target.value)}
        className="px-4 py-2 border border-foreground/20 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">Select your age</option>
        {Array.from({ length: 66 }, (_, i) => 15 + i).map(a => (
          <option key={a} value={a}>
            {a} years old
          </option>
        ))}
      </select>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="px-4 py-2 border border-foreground/20 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {error && <div className="text-destructive text-sm text-center">{error}</div>}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity border border-primary mt-2"
      >
        Continue
      </button>
    </form>
  )
}
