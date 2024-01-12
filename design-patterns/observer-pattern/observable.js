const observers = [];

export const subscribe = (observer) => {
  console.log(`${observer.name} requested to subscribe`);

  observers.push(observer);
};

export const unsubscribe = (observer) => {
  console.log(`${observer.name} requested to unsubscribe`);

  observers.filter((item) => item !== observer);
};

export const notify = (data) => {
  for (const observer of observers) {
    observer(data);
  }
}