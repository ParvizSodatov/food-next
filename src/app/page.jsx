import Image from 'next/image'
import bg1 from '@/assets/bg1.png'
// import bg2 from '@/assets/bg2.png'
import leftbar from '@/assets/left-bar.png'
import bank1 from '@/assets/bank1.png'
import bank2 from '@/assets/bank2.png'

export default function Home() {
	return (
		<>
			<div className='flex w-full h-screen'>
			
				<div className='w-[60px] hidden md:block'>
					<Image src={leftbar} alt='leftbar' className='h-full object-cover' />
				</div>
			
				<div className='relative flex-1'>
					<Image src={bg1} alt='background' fill className='object-cover' />
			

					<div className='absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10 px-4'>
						<h1 className='text-2xl md:text-4xl font-bold mb-4'>
							Видовой ресторан Food Exxe Relo
						</h1>
						<p className='text-xl md:text-2xl'>на Крестовском острове</p>
					</div>
				</div>
			</div>
			<section className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-7xl mx-auto'>
					{/* Header */}
					<div className='mb-12'>
						<h2 className='text-sm font-medium text-gray-600 uppercase tracking-wider mb-2'>
							О РЕСТОРАНЕ
						</h2>
						<div className='w-16 h-0.5 bg-orange-400'></div>
					</div>

					{/* Content Grid */}
					<div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-start'>
						{/* Left Column - Title */}
						<div>
							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
								Food
								<br />
								Exxe
								<br />
								Relo
							</h1>
						</div>

						{/* Right Column - Description */}
						<div className='space-y-6'>
							<p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
								Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In
								lectus phasellus non ornare eget velit. Facilisi urna, tristique
								dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo
								pulvinar sit volutpat nulla vestibulum.
							</p>

							<p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
								Morbi pellentesque enim massa laoreet vel id. Lectus ac,
								facilisis neque turpis. Morbi massa enim nullam sem vehicula.
								Amet quis pellentesque enim porttitor lectus interdum. Nisl,
								faucibus pharetra at porttitor. Fringilla luctus pretium in
								viverra. In adipiscing tempor amet malesuada ullamcorper ut
								sagittis. Dui, scelerisque vulputate risus massa dictum. Cras at
								quis in eu, faucibus feugiat vel. At.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-7xl mx-auto'>
					{/* Header */}
					<div className='mb-12'>
						<h2 className='text-sm font-medium text-gray-600 uppercase tracking-wider mb-2'>
							МЕНЮ
						</h2>
						<div className='w-16 h-0.5 bg-orange-400'></div>
					</div>

					{/* Content Grid */}
					<div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16'>
						{/* Left Column - Title */}
						<div>
							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
								Меню
							</h1>
						</div>

						{/* Right Column - Description */}
						<div className='space-y-6'>
							<p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
								At faucibus nullam mauris vitae ut non. Augue libero non nibh
								nec, et eget orci. Nascetur nunc neque, varius massa aliquam
								interdum turpis massa. Ac tortor aliquam risus, interdum mi
								mauris sit. Ut placerat fermentum pellentesque ac at. Vitae
								venenatis faucibus urna mi eget vitae quam eu. Euismod sed
								mauris id turpis iaculis. Erat rutrum dolor, vitae morbi.
							</p>

							<p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
								Nunc cras cras aliquet blandit faucibus massa sagittis semper.
							</p>
						</div>
					</div>

					{/* Menu Cards */}
					<div className='grid md:grid-cols-2 gap-8'>
						{/* Main Menu Card */}
						<div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
							<div className='aspect-[4/3] overflow-hidden'>
								<Image
									src={bank1}
									alt='Основное меню'
									className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
								/>
							</div>
							<div className='p-6'>
								<h3 className='text-lg font-semibold text-gray-900 mb-2'>
									ОСНОВНОЕ МЕНЮ
								</h3>
								<div className='w-12 h-0.5 bg-orange-400'></div>
							</div>
						</div>

						<div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
							<div className='aspect-[4/3] overflow-hidden'>
								<Image
									src={bank2}
									alt='Барная карта'
									className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
								/>
							</div>
							<div className='p-6'>
								<h3 className='text-lg font-semibold text-gray-900 mb-2'>
									БАРНАЯ КАРТА
								</h3>
								<div className='w-12 h-0.5 bg-orange-400'></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className='bg-gray-50'>
				{/* Delivery Section */}
				<section className='py-16 px-4 sm:px-6 lg:px-8'>
					<div className='max-w-7xl mx-auto'>
					
						<div className='mb-12'>
							<h2 className='text-sm font-medium text-gray-600 uppercase tracking-wider mb-2'>
								ДОСТАВКА
							</h2>
							<div className='w-16 h-0.5 bg-orange-400'></div>
						</div>

				
						<div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-start'>
						
							<div>
								<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
									Служба
									<br />
									доставки
								</h1>
							</div>

				
							<div className='space-y-8'>
								<p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
									Phasellus diam, ultrices lobortis integer et. Diam, purus vel
									sagittis, non, a. In risus, venenatis enim vitae mauris
									aliquet orci. Consectetur nibh interdum nullam ut lobortis eu
									etiam sem. Et in vitae pellentesque non, lectus orci natoque
									faucibus suspendisse. Semper aliquam id et ultrices velit
									donec lacus. In odio sit nibh volutpat cras placerat sit
									feugiat dignissim. Rutrum et suspendisse tortor, lobortis
									eleifend in fringilla. Egestas cursus imperdiet cursus dui,
									nulla id massa. Hendrerit nam enim semper porttitor imperdiet
									diam semper. Nulla sit etiam cras morbi enim elementum euismod
									sapien.
								</p>

								<div className='flex flex-col sm:flex-row gap-4'>
									<button className='bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200'>
										Подробнее
									</button>
									<button className='border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-md font-medium transition-colors duration-200'>
										Условия доставки
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='py-16 px-4 sm:px-6 lg:px-8'>
					<div className='max-w-7xl mx-auto'>
						{/* Header */}
						<div className='mb-12'>
							<h2 className='text-sm font-medium text-gray-600 uppercase tracking-wider mb-2'>
								КОНТАКТЫ
							</h2>
							<div className='w-16 h-0.5 bg-orange-400'></div>
						</div>

					
						<div className='grid lg:grid-cols-2 gap-8 lg:gap-16'>
						
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

							
							<div className='relative'>
						
								<div
									className='w-full h-96 bg-gray-300 rounded-lg relative overflow-hidden'
									
									style={{
									  backgroundImage: `url('/foto/bg2.png')`,
									  backgroundSize: "cover",
									  backgroundPosition: "center",
									}}
								>
									
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
			</div>
		</>
	)
}
