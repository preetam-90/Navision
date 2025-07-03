export type PageParams = {
  id: string;
}

export type PageProps<T = any> = {
  params: T & { then?: never };
  searchParams?: { [key: string]: string | string[] | undefined };
} 