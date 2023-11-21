import { MDContentFolder } from '@/_locales/MultiLangFolder';
import { resolveCurrentFolder } from '@/_utils/resolveFS';

export function getMDContent(locale: string) {
	const mdContentFolder = new MDContentFolder({
		path: resolveCurrentFolder(import.meta.url),
	});
	return mdContentFolder.getLanguageFile(locale);
}
