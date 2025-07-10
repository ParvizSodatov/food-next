export default function Dostavka(){
	return (<>
	
   <div className="bg-gray-50 mt-[40px]">
      {/* Action Buttons Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 order-1 sm:order-1">
              Бронь столика
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:text-gray-900 px-8 py-3 rounded-md font-medium transition-colors duration-200 order-2 sm:order-2">
              Подробнее
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:text-gray-900 px-8 py-3 rounded-md font-medium transition-colors duration-200 order-3 sm:order-3">
              Условия доставки
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold text-amber-400 tracking-wider">FOOD</h2>
            </div>

            {/* Privacy Policy */}
            <div className="order-1 md:order-2 text-center">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Политика конфиденциальности
              </a>
            </div>

            {/* Design Credit */}
            <div className="order-3 md:order-3">
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm transition-colors duration-200">
                Дизайн d-f-s.ru
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
	 	<section className='py-16 px-4 sm:px-6 lg:px-8 '>
					<div className='max-w-7xl mx-auto'>
						{/* Header */}
						<div className='mb-12'>
							<h2 className='text-sm font-medium text-gray-600 uppercase tracking-wider mb-2'>
								КОНТАКТЫ
							</h2>
							<div className='w-16 h-0.5 bg-orange-400'></div>
						</div>

						{/* Content Grid */}
						<div className='grid lg:grid-cols-2 gap-8 lg:gap-16'>
							{/* Left Column - Delivery Times */}
							<div className='grid grid-cols-2 gap-8'>
								<div className='text-center'>
									<div className='text-4xl sm:text-5xl font-bold text-amber-600 mb-2'>
										2
									</div>
									<div className='text-amber-600 font-medium mb-2'>мин</div>
									<div className='text-gray-700 text-sm'>
										из центра
										<br />
										Санкт-Петербурга
									</div>
								</div>

								<div className='text-center'>
									<div className='text-4xl sm:text-5xl font-bold text-amber-600 mb-2'>
										12
									</div>
									<div className='text-amber-600 font-medium mb-2'>мин</div>
									<div className='text-gray-700 text-sm'>
										из города
										<br />
										Зеленогорск
									</div>
								</div>

								<div className='text-center'>
									<div className='text-4xl sm:text-5xl font-bold text-amber-600 mb-2'>
										42
									</div>
									<div className='text-amber-600 font-medium mb-2'>мин</div>
									<div className='text-gray-700 text-sm'>
										из аэропорта
										<br />
										Пулково
									</div>
								</div>

								<div className='text-center'>
									<div className='text-4xl sm:text-5xl font-bold text-amber-600 mb-2'>
										52
									</div>
									<div className='text-amber-600 font-medium mb-2'>мин</div>
									<div className='text-gray-700 text-sm'>
										из города
										<br />
										Павловск
									</div>
								</div>
							</div>

							{/* Right Column - Map with Contact Info */}
							<div className='relative'>
								{/* Map Background */}
								<div
									className='w-full h-96 bg-gray-300 rounded-lg relative overflow-hidden'
									
									style={{
									  backgroundImage: `url('/foto/bg2.png')`,
									  backgroundSize: "cover",
									  backgroundPosition: "center",
									}}
								>
									{/* Contact Info Card */}
									<div className='absolute top-4 left-4 bg-gray-800 text-white p-6 rounded-lg max-w-xs'>
										<div className='space-y-4'>
											<div className='flex items-start space-x-3'>
												<div className='text-orange-400 mt-1'>📍</div>
												<div className='text-sm'>
													Санкт-Петербург, Северная дорога, 11
												</div>
											</div>

											<div className='flex items-start space-x-3'>
												<div className='text-orange-400 mt-1'>📞</div>
												<div className='text-sm'>+7 (921) 777-77-77</div>
											</div>

											<div>
												<div className='text-sm font-medium mb-2'>
													Время работы
												</div>
												<div className='text-xs space-y-1'>
													<div>Вск-Чт с 12:00 до 23:00</div>
													<div>Пт-Сб с 12:00 до 03:00</div>
												</div>
											</div>

											<div className='flex flex-col space-y-2 pt-2'>
												<button className='bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200'>
													Бронь столика
												</button>
												<button className='border border-gray-500 hover:border-gray-400 text-white hover:text-gray-200 px-4 py-2 rounded text-sm font-medium transition-colors duration-200'>
													Задать вопрос
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				

	</>)
}