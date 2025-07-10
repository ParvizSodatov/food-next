'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const menuCategories = [
	'Завтраки',
	'Raw',
	'Холодные закуски',
	'Брускетты',
	'К вину',
	'Салаты',
	'Супы',
	'Паста и ризотто',
	'Мясо',
	'Рыба',
	'Grill',
	'Мангал',
	'Гарниры',
]

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
export default function Menu() {
	const [activeCategory, setActiveCategory] = useState('Завтраки')
	const filteredItems = menuItems.filter(
		item => item.category === activeCategory
	)
	return (
		<>
			<div className='min-h-screen bg-gray-50 mt-[60px]'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
					{/* Category Tabs */}
					<div className='mb-8'>
						{/* Desktop Tabs */}
						<div className='hidden lg:flex flex-wrap gap-8 border-b border-gray-200'>
							{menuCategories.map(category => (
								<button
									key={category}
									onClick={() => setActiveCategory(category)}
									className={`pb-4 px-1 text-sm font-medium transition-colors duration-200 relative ${
										activeCategory === category
											? 'text-amber-600 border-b-2 border-amber-600'
											: 'text-gray-500 hover:text-gray-700'
									}`}
								>
									{category}
								</button>
							))}
						</div>

						{/* Mobile Dropdown */}
						<div className='lg:hidden'>
							<select
								value={activeCategory}
								onChange={e => setActiveCategory(e.target.value)}
								className='w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
							>
								{menuCategories.map(category => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</select>
						</div>
					</div>

					{/* Menu Items Grid */}
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
						{filteredItems.map(item => (
							<div
								key={item.id}
								className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'
							>
								{/* Image */}
								<div className='aspect-[4/3] overflow-hidden'>
									<Image
										width={100}
										height={100}
										src={item.image || '/placeholder.svg'}
										alt={item.name}
										className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
									/>
								</div>
								{/* Content */}
								<div className='p-4'>
									<h3 className='text-gray-900 font-medium text-sm mb-3 line-clamp-2 min-h-[2.5rem]'>
										{item.name}
									</h3>

									<div className='flex items-center justify-between'>
										<div className='flex items-center space-x-1'>
											{item.pricePrefix && (
												<span className='text-gray-600 text-sm'>
													{item.pricePrefix}
												</span>
											)}
											<span className='text-gray-900 font-semibold text-lg'>
												{item.price} ₽
											</span>
										</div>
										<Link href={`/menu/${item.id}`}>
											<button className='bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200'>
												Инфо
											</button>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Empty State */}
					{filteredItems.length === 0 && (
						<div className='text-center py-12'>
							<p className='text-gray-500 text-lg'>
								В этой категории пока нет блюд
							</p>
						</div>
					)}
				</div>
			</div>
			<section className='py-16 px-4 sm:px-6 lg:px-8'>
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
									backgroundSize: 'cover',
									backgroundPosition: 'center',
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
		</>
	)
}
