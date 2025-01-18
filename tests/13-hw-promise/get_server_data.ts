async function getUserData(): Promise<{ name: string; age: number }> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { name: "John", age: 30 };
  }
  
  (async () => {
    try {
      const user = await getUserData();
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  })();