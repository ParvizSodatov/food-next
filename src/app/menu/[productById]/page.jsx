import Image from 'next/image'

export default function ProductById({ params }) {
	const menuItems = [
		{
			id: 1,
			name: 'Яичница-глазунья из трех яиц',
			price: 250,
			image: '/foto/a1.png',
			category: 'Завтраки',
		},
		{
			id: 2,
			name: 'Омлет из трёх яиц',
			price: 250,
			image: '/foto/a2.png',
			category: 'Завтраки',
		},
		{
			id: 3,
			name: 'Домашние сырники',
			price: 490,
			image: '/foto/a11.png',
			category: 'Завтраки',
		},
		{
			id: 4,
			name: 'Блины',
			price: 190,
			pricePrefix: 'от',
			image: '/foto/a3.png',
			category: 'Завтраки',
		},
		{
			id: 5,
			name: 'Каша с ягодами и кедровыми орехами',
			price: 450,
			image: '/foto/a4.png',
			category: 'Завтраки',
		},
		{
			id: 6,
			name: 'Скрэмбл',
			price: 290,
			image: '/foto/a5.png',
			category: 'Завтраки',
		},
		{
			id: 7,
			name: 'Яйцо Бенедикт с лососем',
			price: 850,
			image: '/foto/a6.png',
			category: 'Завтраки',
		},
		{
			id: 8,
			name: 'Яйцо Бенедикт с беконом',
			price: 650,
			image: '/foto/a7.png',
			category: 'Завтраки',
		},
		{
			id: 9,
			name: 'Гречневая каша с авокадо, яйцом пашот и пармезаном',
			price: 490,
			image: '/foto/a8.png',
			category: 'Завтраки',
		},
		{
			id: 10,
			name: 'Кобб – салат с лососем',
			price: 890,
			image: '/foto/a9.png',
			category: 'Салаты',
		},
		{
			id: 11,
			name: 'Кобб – салат с креветками',
			price: 960,
			image: '/foto/a10.png',
			category: 'Салаты',
		},
	]
	const id=params.productById
	const product=menuItems.filter((el)=>el.id==id)
	return (
		<>
			<div className='max-w-7xl mx-auto px-4 py-6 bg-white mt-[70px]'>
				
				<nav className='mb-8'>
					<ul className='flex flex-wrap gap-6 text-sm text-gray-600 border-b border-gray-200 pb-4'>
						<li className='border-b-2 border-orange-500 text-orange-500 font-medium pb-2'>
							Завтраки
						</li>
						<li className='hover:text-gray-900 cursor-pointer'>Raw</li>
						<li className='hover:text-gray-900 cursor-pointer'>
							Холодные закуски
						</li>
						<li className='hover:text-gray-900 cursor-pointer'>Брускетте</li>
						<li className='hover:text-gray-900 cursor-pointer'>К пиву</li>
						<li className='hover:text-gray-900 cursor-pointer'>Салаты</li>
						<li className='hover:text-gray-900 cursor-pointer'>Супы</li>
						<li className='hover:text-gray-900 cursor-pointer'>
							Паста и ризотто
						</li>
						<li className='hover:text-gray-900 cursor-pointer'>Мясо</li>
						<li className='hover:text-gray-900 cursor-pointer'>Рыба</li>
						<li className='hover:text-gray-900 cursor-pointer'>Grill</li>
						<li className='hover:text-gray-900 cursor-pointer'>Манная</li>
						<li className='hover:text-gray-900 cursor-pointer'>Гарниры</li>
					</ul>
				</nav>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					<div className='space-y-4'>
					
						<div className='bg-gray-100 rounded-lg overflow-hidden'>
							<Image
								src={product[0].image}
								alt='Яичница-глазунья из трех яиц'
								width={500}
								height={400}
								className='w-full h-auto object-cover'
							/>
						</div>

				
						<div className='flex gap-3'>
							<div className='w-20 h-20 bg-gray-100 rounded-lg overflow-hidden'>
								<Image
									src={product[0].image}
									alt='Thumbnail 1'
									width={80}
									height={80}
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='w-20 h-20 bg-gray-100 rounded-lg overflow-hidden'>
								<Image
								src={product[0].image}
									alt='Thumbnail 2'
									width={80}
									height={80}
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='w-20 h-20 bg-gray-100 rounded-lg overflow-hidden'>
								<Image
								src={product[0].image}
									alt='Thumbnail 3'
									width={80}
									height={80}
									className='w-full h-full object-cover'
								/>
							</div>
						</div>
					</div>

					
					<div className='space-y-6'>
						
						<h1 className='text-2xl font-bold text-gray-900'>
							{product[0].name}
						</h1>

					
						<div className='flex items-baseline gap-2'>
							<span className='text-3xl font-bold text-gray-900'>{product[0].price}$</span>
							<span className='text-sm text-gray-500'>/ 400 грамм</span>
						</div>

					
						<div className='space-y-3'>
							<p className='text-sm text-gray-600'>Количество порций:</p>
							<div className='flex items-center gap-4'>
								<div className='flex items-center border border-gray-300 rounded'>
									<button className='px-3 py-2 text-gray-600 hover:bg-gray-50'>
										-
									</button>
									<span className='px-4 py-2 border-x border-gray-300'>1</span>
									<button className='px-3 py-2 text-gray-600 hover:bg-gray-50'>
										+
									</button>
								</div>
								<button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-medium'>
									В корзину
								</button>
							</div>
						</div>

					
						<div className='space-y-4 pt-6 border-t border-gray-200'>
							<h3 className='text-lg font-semibold text-gray-900'>
								Сделать еще вкуснее
							</h3>

							<div className='space-y-3'>
							
								<div className='flex items-center justify-between p-3 border border-gray-200 rounded-lg'>
									<div>
										<p className='text-sm text-gray-700'>Тертые орешки 60 г</p>
										<p className='text-lg font-semibold text-gray-900'>450 ₽</p>
									</div>
									<button className='w-6 h-6 border-2 border-gray-300 rounded'></button>
								</div>

					
								<div className='flex items-center justify-between p-3 border border-gray-200 rounded-lg'>
									<div>
										<p className='text-sm text-gray-700'>Томаты / паприка</p>
										<p className='text-lg font-semibold text-gray-900'>80 ₽</p>
									</div>
									<button className='w-6 h-6 border-2 border-gray-300 rounded'></button>
								</div>

						
								<div className='flex items-center justify-between p-3 border border-gray-200 rounded-lg'>
									<div>
										<p className='text-sm text-gray-700'>Бекон</p>
										<p className='text-lg font-semibold text-gray-900'>120 ₽</p>
									</div>
									<button className='w-6 h-6 border-2 border-gray-300 rounded'></button>
								</div>

							
								<div className='flex items-center justify-between p-3 border border-gray-200 rounded-lg'>
									<div>
										<p className='text-sm text-gray-700'>Сыр чеддер 30 г</p>
										<p className='text-lg font-semibold text-gray-900'>80 ₽</p>
									</div>
									<button className='w-6 h-6 border-2 border-gray-300 rounded'></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
