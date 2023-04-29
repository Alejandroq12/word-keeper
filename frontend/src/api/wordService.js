const API_BASE = 'http://localhost:3000/api';

export const getAllWords = async () => {
  const response = await fetch(`${API_BASE}/words`);
  return await response.json();
};

export const createWord = async (wordData) => {
  const response = await fetch(`${API_BASE}/words`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(wordData),
  });
  const data = await response.json();
  return data;
};

export const updateWord = async (id, word) => {
  const response = await fetch(`${API_BASE}/words/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  });
  return await response.json();
};

export const deleteWord = async (id) => {
  const response = await fetch(`${API_BASE}/words/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};
