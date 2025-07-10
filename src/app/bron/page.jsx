export default function Component() {
  return (
    <section className="relative min-h-screen flex items-center justify-center ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/foto/r.png')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 w-full flex items-center justify-center min-h-screen px-4">
      
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="text-orange-400 text-2xl font-bold mb-2">✦</div>
            <h1 className="text-orange-400 text-3xl font-bold tracking-wider">FOOD</h1>
            <div className="text-orange-400 text-2xl font-bold mt-2">✦</div>
          </div>

          {/* Form Title */}
          <h3 className="text-white text-center text-lg font-medium mb-6 tracking-wide">ЗАБРОНИРОВАТЬ СТОЛИК</h3>

          {/* Form */}
          <form className="space-y-4">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Имя"
              className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-md text-white placeholder:text-gray-300 focus:border-orange-400 focus:outline-none"
            />

            {/* Phone Input */}
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-md text-white placeholder:text-gray-300 focus:border-orange-400 focus:outline-none"
            />

            {/* Guests and Time Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Guests Select */}
              <select className="px-4 py-3 bg-transparent border border-gray-400 rounded-md text-white focus:border-orange-400 focus:outline-none">
                <option value="" className="bg-gray-800 text-white">
                  Гостей
                </option>
                <option value="1" className="bg-gray-800 text-white">
                  1 гость
                </option>
                <option value="2" className="bg-gray-800 text-white">
                  2 гостя
                </option>
                <option value="3" className="bg-gray-800 text-white">
                  3 гостя
                </option>
                <option value="4" className="bg-gray-800 text-white">
                  4 гостя
                </option>
                <option value="5" className="bg-gray-800 text-white">
                  5 гостей
                </option>
                <option value="6" className="bg-gray-800 text-white">
                  6+ гостей
                </option>
              </select>

              {/* Time Select */}
              <select className="px-4 py-3 bg-transparent border border-gray-400 rounded-md text-white focus:border-orange-400 focus:outline-none">
                <option value="" className="bg-gray-800 text-white">
                  Время
                </option>
                <option value="12:00" className="bg-gray-800 text-white">
                  12:00
                </option>
                <option value="13:00" className="bg-gray-800 text-white">
                  13:00
                </option>
                <option value="14:00" className="bg-gray-800 text-white">
                  14:00
                </option>
                <option value="15:00" className="bg-gray-800 text-white">
                  15:00
                </option>
                <option value="16:00" className="bg-gray-800 text-white">
                  16:00
                </option>
                <option value="17:00" className="bg-gray-800 text-white">
                  17:00
                </option>
                <option value="18:00" className="bg-gray-800 text-white">
                  18:00
                </option>
                <option value="19:00" className="bg-gray-800 text-white">
                  19:00
                </option>
                <option value="20:00" className="bg-gray-800 text-white">
                  20:00
                </option>
                <option value="21:00" className="bg-gray-800 text-white">
                  21:00
                </option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 mt-6 rounded-md transition-colors duration-200"
            >
              Забронировать
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
