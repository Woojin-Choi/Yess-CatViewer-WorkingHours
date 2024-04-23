interface CatsInterface {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: [];
  categories: [];
}

interface TimeInterface {
  start: string;
  end: string;
}

export type { CatsInterface, TimeInterface };
