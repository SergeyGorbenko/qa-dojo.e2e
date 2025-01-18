function task1(): Promise<string> {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(() => {
      resolve("Завдання 1 виконано");
    }, delay);
  });
}

function task2(): Promise<string> {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(() => {
      resolve("Завдання 2 виконано");
    }, delay);
  });
}

function task3(): Promise<string> {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(() => {
      resolve("Завдання 3 виконано");
    }, delay);
  });
}

Promise.all([task1(), task2(), task3()])
  .then((results) => {
    console.log("Всі завдання виконано:");
    results.forEach((result) => console.log(result));
  })
  .catch((error) => {
    console.error("Сталася помилка:", error);
  });
