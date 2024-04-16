import { Fragment } from '@/(pages)/slides/contract-with-devil/_components/Fragment';
import styles from '@/(pages)/slides/contract-with-devil/_slides/DepsRuleIntro/styles.module.css';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function MyStory(): ReactElement {
	return (
		<>
			<Section bgColor="light" transition="zoom-in fade-out">
				<h3>
					Проте у &quot;правила залежностей&quot; <br />є і друга
					сторона медалі
				</h3>
				<Fragment component="p">
					Яка проявляється у наслідках залежності зовнішнього кола від
					внутрішнього
				</Fragment>
			</Section>
			<Section
				bgColor="accent"
				className={styles.sectionAttention}
				transition="zoom-in slide-out"
			>
				<p>Фокус моєї доповіді:</p>
				<h3>Залежність Клієнта від АПІ</h3>
				<p>&nbsp;</p>
			</Section>
			<Section bgColor="darker" transition="zoom-in zoom-out">
				<h3>Моя історія</h3>
				<hr style={{ width: '10%' }} />
				<p>
					<Fragment>Про захоплення технологією,</Fragment>
					<br />
					<Fragment>про зневіру в обраному шляху</Fragment>
					<br />
					<Fragment>та &quot;просвітлення&quot; 😎</Fragment>
				</p>
			</Section>
		</>
	);
}
