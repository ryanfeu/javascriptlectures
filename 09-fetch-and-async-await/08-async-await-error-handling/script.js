const getUsers = async () => {
  try {
    const response = await fetch('https://httpstat.us/404');

    const data = await response.text();

    if (!response.ok) {
      throw new Error('Request Failed');
    }

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers();

const getPosts = async () => {
  const response = await fetch('https://httpstat.us/500');

  if (!response.ok) {
    throw new Error('Request Failed');
  }

  const data = await response.text();

  console.log(data);
};

getPosts().catch((error) => console.log(error));
