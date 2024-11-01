"use server";

import { revalidateTag } from "next/cache";

const url = "http://localhost:3000/api/v1/q&a";
export async function getAllData() {
  const res = await fetch(url, { next: { tags: ["ques"] } });
  const data = await res.json();
  return data;
}

export async function postQues(ques) {
  await fetch(url, { method: "POST", body: JSON.stringify(ques) });
  revalidateTag("ques");
}

export async function deleteQues(id) {
  await fetch(`${url}/${id}`, { method: "DELETE" });
  revalidateTag("ques");
}
