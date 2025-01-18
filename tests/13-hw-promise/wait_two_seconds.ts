function waitForTwoSeconds(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2 секунди пройшло!");
      resolve();
    }, 2000);
  });
}

waitForTwoSeconds();
