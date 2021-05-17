const dataPost =  async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });

  return await res.json();
};

async function dataGet(url) {
  const res = await fetch(url);

  return await res.json();
}

export {dataPost, dataGet};