import { FC } from 'react';
import { Layout } from '../../layout/Layout';
import Catalog from '../../components/UI/Catalog/Catalog';
import { products } from '../../data/products.data';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import styles from './ResultPage.module.css';

const ResultPage: FC = () => {
	const searchResult = useTypedSelector((state) => state.search);
	const { removeFromArray } = useActions();
	const findElement = (name: string) => {
		const item = products.filter((item) =>
			item.name.toLowerCase().includes(name.toLowerCase())
		);
		return item;
		removeFromArray();
	};
	return (
		<Layout
			title='Resultados de miel pura'
			description='Resultados de miel pura'
		>
			{findElement(searchResult.item).length ? (
				<div>
					<div className={styles.text}>
						{'We found ' +
							findElement(searchResult.item).length +
							(findElement(searchResult.item).length > 1
								? ' products'
								: ' product') +
							' for you'}
					</div>
					<Catalog products={findElement(searchResult.item)}></Catalog>
				</div>
			) : (
				<div className={styles.text}>Parece Que No Encontramos Nada. 😞 </div>
			)}
		</Layout>
	);
};

export default ResultPage;
