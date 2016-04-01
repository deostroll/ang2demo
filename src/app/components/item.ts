export default class Item {
  public task: string;
  public isCompleted: boolean;
  public id: number;

  constructor(task: string) {
    this.task = task;
    this.isCompleted = false;
  }

  markCompleted(finish: boolean) {
    this.isCompleted = finish;
  }
}
