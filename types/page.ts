export type PageParams = {
  id: string;
}

export type PageProps<T = any> = {
  params: T;
  searchParams?: { [key: string]: string | string[] | undefined };
} 