import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

const ITEMS_PER_PAGE = 'Items per page:';
const NEXT_PAGE = 'Next page';
const PREV_PAGE = 'Previous page';
const FIRST_PAGE = 'First page';
const LAST_PAGE = 'Last page';

@Injectable()
export class MatPaginatorI18nService extends MatPaginatorIntl {
	public constructor(private translate: TranslateService) {
		super();

		this.translate.onLangChange
		//.pipe(takeUntil(...))
		.subscribe((e: Event) => {
			this.getAndInitTranslations();
		});

		this.getAndInitTranslations();
	}

	itemsPerPageLabel = 'Itens por página';
	nextPageLabel = 'Próxima página';
	previousPageLabel = 'Página anterior';

	public getRangeLabel = (page: number, pageSize: number, length: number): string => {
		if (length === 0 || pageSize === 0) {
			return `0 / ${length}`;
		}

		length = Math.max(length, 0);

		const startIndex: number = page * pageSize;
		const endIndex: number = startIndex < length
		? Math.min(startIndex + pageSize, length)
		: startIndex + pageSize;

		return `${startIndex + 1} - ${endIndex} de ${length}`;
	};

	public getAndInitTranslations(): void {
		this.translate.get([
			'ITEMS_PER_PAGE',
			'NEXT_PAGE',
			'PREV_PAGE',
			'FIRST_PAGE',
			'LAST_PAGE',
		])
		.subscribe((translation: any) => {
			this.itemsPerPageLabel = translation[ITEMS_PER_PAGE] || 'Itens por página';
			this.nextPageLabel = translation[NEXT_PAGE] || 'Próxima página';
			this.previousPageLabel = translation[PREV_PAGE] || 'Página anterior';
			this.firstPageLabel = translation[FIRST_PAGE] || 'Primeira página';
			this.lastPageLabel = translation[LAST_PAGE] || 'Última página';

			this.changes.next();
		});
	}
}
