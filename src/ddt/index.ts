import { RandomPicker } from "./RandomPicker";
import { WeightedItem } from "./types";

export const pick = <T>(items: WeightedItem<T>[]) =>
  new RandomPicker(items).pick();

export const pickMany = <T>(items: WeightedItem<T>[], amount: number) =>
  new RandomPicker(items).pickMany(amount);
