export interface FilterOption {
  label: string;
  value: string;
}

export interface Filter {
  name: string;
  title: string;
  type: "radio" | "select";
  options: FilterOption[];
}
