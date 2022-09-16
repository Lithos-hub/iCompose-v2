export interface EventModel {
  id?: number | undefined;
  title: string;
  description?: string | undefined;
}

export interface EventItemsModel {
  items: EventModel[];
}
