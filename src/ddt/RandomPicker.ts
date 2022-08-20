import { WeightedItem } from './types'
export class RandomPicker<T> {
  totalWeight: number = 0;
  constructor(private items: WeightedItem<T>[]) {
    if (!items.length) {
      throw new Error('Items must be not empty!');
    }
    this.updateTotalWeight();
  }

  pick(): T {
    // throw new Error('Not Implemented!')
    const random = Math.random() * this.totalWeight;
    let currentWeight = 0;

    for (const item of this.items) {
      currentWeight += item.weight;
      if (random < currentWeight) {
        return item.original;
      }
    }

    /* istanbul ignore next */
    throw new Error(
      "No idea why this happened, get in touch with the wrand developer!"
    );
  }

  pickMany(amount: number): T[] {
    // throw new Error('Not Implemented!')
    const items = [];
    for(let i = 0; i < amount; i++) {
      items.push(this.pick())
    }
    return items;
  }

  private updateTotalWeight(): void {
    this.totalWeight = this.items.reduce((acc, item) => acc + item.weight, 0);
  }
}