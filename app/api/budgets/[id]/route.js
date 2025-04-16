import { connectDB } from '@/lib/db.js';
import Budget from '@/models/Budget';
import { NextResponse } from 'next/server';

export async function PUT(req, { params }) {
  await connectDB();
  const { id } = params;
  const body = await req.json();

  try {
    const updatedBudget = await Budget.findByIdAndUpdate(id, body, { new: true });
    return NextResponse.json(updatedBudget);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update budget' }, { status: 500 });
  }
}
