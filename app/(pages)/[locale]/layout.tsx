import { Root } from '@/_components/Root';
import { AVAILABLE_LOCALES, Locale } from '@/_locales';
import type { LayoutProps } from '@/_types/layout-props';
import { HRefMaker } from '@/_utils/HRefMaker';
import React from 'react';
import { Footer, Props as FooterProps } from './_layout/components/Footer/view';
import { Header, Props as HeaderProps } from './_layout/components/Header/view';
import { getTranslations, Translations } from './_layout/translations';

export default async function Layout(
	props: LayoutProps
): Promise<React.ReactElement> {
	const locale = props.params.locale;
	if (AVAILABLE_LOCALES.includes(locale)) {
		const translations = await getTranslations(locale);
		return (
			<RenderAsPage locale={locale} translations={translations}>
				{props.children}
			</RenderAsPage>
		);
	} else {
		return <RenderAsAsset />;
	}
}

interface PageProps {
	children: React.ReactNode;
	locale: Locale;
	translations: Translations;
}

function RenderAsPage({
	locale,
	translations,
	children,
}: PageProps): React.ReactElement {
	const heading: HeaderProps['heading'] = { ...translations.heading };

	const nav: HeaderProps['nav'] = {
		rootHref: new HRefMaker(locale).make('/'),
		description: translations.nav.description,
		items: translations.nav.items,
	};

	const localeSwitcher: HeaderProps['localeSwitcher'] = {
		description: translations.localeSwitcher.description,
		options: [
			{
				label: 'English',
				value: 'en',
			},
			{
				label: 'Українська',
				value: 'uk',
			},
		],
	};

	const howThisPageWorks: FooterProps['howThisPageWorks'] = {
		...translations.howThisPageWorks,
	};

	return (
		<Root locale={locale} gridBody>
			<Header
				heading={heading}
				nav={nav}
				localeSwitcher={localeSwitcher}
			/>
			<div className="body-grow">{children}</div>
			<Footer howThisPageWorks={howThisPageWorks} />
		</Root>
	);
}

function RenderAsAsset(): React.ReactNode {
	return null;
}
