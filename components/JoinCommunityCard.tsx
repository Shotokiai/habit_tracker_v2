import React from "react"

export default function JoinCommunityCard() {
  return (
    <main className="w-[360px] h-[790px] bg-white dark:bg-card-dark rounded-[32px] shadow-soft overflow-hidden relative flex flex-col mx-auto my-auto shrink-0 font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[20%] w-[80%] h-[40%] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-[80px]" />
        <div className="absolute top-[20%] -right-[20%] w-[60%] h-[30%] bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-[80px]" />
      </div>
      <div className="relative z-10 flex flex-col h-full px-8 py-10 justify-between">
        {/* Top Section */}
        <div className="flex flex-col items-center pt-8">
          <div className="w-[88px] h-[88px] bg-gradient-to-tr from-blue-600 to-blue-400 rounded-3xl flex items-center justify-center shadow-glow mb-8">
            <span className="material-symbols-outlined text-white text-[44px]">star</span>
          </div>
          <h1 className="text-[26px] leading-tight font-bold text-gray-900 dark:text-white text-center mb-2 tracking-tight">
            Join Our Community
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-center text-[15px] font-medium opacity-90">
            Become part of something great
          </p>
        </div>
        {/* Form Section */}
        <form className="space-y-4 w-full mt-2">
          <div className="group relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <span className="material-symbols-outlined text-[22px]">person</span>
            </div>
            <input className="block w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-transparent rounded-2xl text-gray-900 dark:text-white placeholder-gray-400/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 focus:bg-white dark:focus:bg-gray-800 transition-all duration-200 text-[15px] shadow-sm font-medium" id="name" name="name" placeholder="What's your name?" type="text" />
          </div>
          <div className="group relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <span className="material-symbols-outlined text-[22px]">calendar_today</span>
            </div>
            <select className="block w-full pl-12 pr-10 py-4 bg-gray-50 dark:bg-gray-800 border-transparent rounded-2xl text-gray-900 dark:text-white text-[15px] font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 focus:bg-white dark:focus:bg-gray-800 transition-all duration-200 shadow-sm appearance-none cursor-pointer" id="age" name="age" defaultValue="">
              <option disabled value="">How old are you?</option>
              <option value="under_18">Under 18</option>
              <option value="18_24">18 - 24</option>
              <option value="25_34">25 - 34</option>
              <option value="35_44">35 - 44</option>
              <option value="45_plus">45+</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </div>
          <div className="group relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <span className="material-symbols-outlined text-[22px]">mail</span>
            </div>
            <input className="block w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-transparent rounded-2xl text-gray-900 dark:text-white placeholder-gray-400/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 focus:bg-white dark:focus:bg-gray-800 transition-all duration-200 text-[15px] shadow-sm font-medium" id="email" name="email" placeholder="Your email address" type="email" />
          </div>
          <div className="pt-4">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-2xl shadow-lg shadow-blue-500/25 dark:shadow-blue-500/10 active:scale-[0.98] transition-all duration-200 flex items-center justify-center text-[16px] tracking-wide" type="button">
              Let's Go!
              <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
            </button>
          </div>
        </form>
        {/* Footer Section */}
        <div className="mb-4 pt-4 text-center border-t border-gray-100 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-[14px]">
            Been here before?
            <a className="text-blue-500 font-semibold hover:text-blue-700 dark:hover:text-blue-400 transition-colors ml-1" href="#">Log In</a>
          </p>
        </div>
      </div>
    </main>
  )
}
