'use server';

import { revalidatePath } from 'next/cache';
import { addMotto, deleteMotto } from './db';

export async function addMottoAction(formData: FormData) {
  const text = formData.get('text') as string;
  if (!text?.trim()) return;
  addMotto(text);
  revalidatePath('/');
  revalidatePath('/mottos-admin');
}

export async function deleteMottoAction(id: number) {
  deleteMotto(id);
  revalidatePath('/');
  revalidatePath('/mottos-admin');
}
