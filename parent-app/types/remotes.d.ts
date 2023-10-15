declare module "childApp/App" {
  export function mount({
    mountPoint,
    initialPathname,
  }: {
    mountPoint: HTMLDivElement;
    initialPathname: string;
  }): void;
}
