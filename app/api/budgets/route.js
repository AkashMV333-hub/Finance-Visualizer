import { connectDB } from '@/lib/db.js';
import Budget from '@/models/Budget';
import { NextResponse } from 'next/server';

export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const month = searchParams.get('month'); // e.g. "2025-04"

  try {
    let query = {};
    if (month) query.month = month;

    const budgets = await Budget.find(query);
    return NextResponse.json(budgets);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch budgets' }, { status: 500 });
  }
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();

  try {
    const newBudget = new Budget(body);
    await newBudget.save();
    return NextResponse.json(newBudget, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create budget' }, { status: 500 });
  }
}
