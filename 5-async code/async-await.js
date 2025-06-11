async function fetchData() {
  // Simulate an asynchronous operation (e.g., fetching from an API)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000);
  });
}

async function main() {
  try {
    console.log("Fetching data...");
    const result = fetchData();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();