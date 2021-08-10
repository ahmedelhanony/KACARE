export class GridPagination {
	buttonCount: number = 5;
	info: boolean = true;
	type: 'numeric' | 'input' = 'numeric';
	pageSizes: number[] = [5, 10, 25, 50, 100];
	previousNext: boolean = true;
}

export interface Search {
	q?: string;
	q_field?: string; // optional, required with q, search column, valid values: name, name, name
}

export class Filters {
	active?: number;
	status?: string;
	category_id?: number;
	user_id?: number;
	country_id?: number;
	subcategory_id?: number;
	city_id?: number;
}

export class SearchOptions {
	q?: string;
	q_field?: string;
}

export interface DynamicFormBuilderField {
	type?: string;
	name?: string;
	displayNameTag?: string;
	label?: string;
	listItems?: any[];
	dataSource?: any[];
	defaultItem?: {
		Text?: string;
		Value?: any;
	};
	onDropdownFilterChange?: any;
	onValueChange?: any;
	value?: any;
	filterable?: boolean;
	required?: boolean;
	disabled?: boolean;
	styleClasses?: string;
}
