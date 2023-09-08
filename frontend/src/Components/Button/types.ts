export interface IButton<T = void> {
  text: string;
  size: string;
  onClick?: (arg: T) => void
}
