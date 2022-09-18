export interface EventModel {
  id?: number | undefined;
  title: string;
  description?: string | undefined;
  color: string;
}

export interface EventItemsModel {
  items: EventModel[];
}
