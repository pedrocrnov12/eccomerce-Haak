import { FC, useState, Suspense } from 'react';
import React from 'react';
const Heading = React.lazy(() => import('../../components/UI/Heading/Heading'));
const Carousel = React.lazy(
	() => import('../../components/UI/Catalog/Catalog')
);
const Sorting = React.lazy(() => import('../../components/UI/Sorting/Sorting'));
import { products } from '../../data/products.data';
import { Emergente } from '../../components/Emergente/Emergente';

export const MainPage: FC = () => {
	const [sortType, setSortType] = useState('Default Sorting');
	const getSortType = (type: string) => {
		setSortType(type);
	};
	const handleBuyClick = () => {
		console.log('Buy button clicked');
	};
	const handleHistoryClick = () => {
		console.log('History button clicked');
	};

	return (
		<>
			<Suspense
				fallback={
					<div className='wrapper-spin'>
						<div className='spin-loading'></div>
					</div>
				}
			>
				<Heading>
					Kaab Haak <br /> ¡La Mejor Miel!
				</Heading>

				<Emergente onBuyClick={handleBuyClick} onHistoryClick={handleHistoryClick} />

				<Sorting getSortType={getSortType} />
				<Carousel products={products} sortType={sortType} />
			</Suspense>
		</>
	);
};
