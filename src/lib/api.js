const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export async function getBooks(status) {
  const query = status ? `?status=${status}` : "";
  const response = await fetch(`${API_URL}/books${query}`);

  if (!response.ok) {
    throw new Error("책 목록을 불러오지 못했습니다.");
  }

  return response.json();
}

export async function getBook(id) {
  const response = await fetch(`${API_URL}/books/${id}`);

  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error("책 정보를 불러오지 못했습니다.");
  }

  return response.json();
}

export async function createBook(newBook) {
  const response = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  });

  if (!response.ok) {
    const body = await response.json();
    throw new Error(body.message);
  }

  return response.json();
}

export async function getMemos(bookId) {
  const response = await fetch(`${API_URL}/books/${bookId}/memos`);

  if (!response.ok) {
    throw new Error("메모를 불러오지 못했습니다.");
  }

  return response.json();
}

export async function addMemo({ bookId, text, writer }) {
  const response = await fetch(`${API_URL}/books/${bookId}/memos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, writer }),
  });

  if (!response.ok) {
    const body = await response.json();
    throw new Error(body.message);
  }

  return response.json();
}
