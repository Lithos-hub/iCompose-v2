export interface EventModel {
  id?: number | undefined;
  title: string;
  description: string;
  color: string;
}

export interface EventItemsModel {
  items: EventModel[];
}

export interface DateDataModel {
  day?: number;
  month: number;
  year: number;
}
