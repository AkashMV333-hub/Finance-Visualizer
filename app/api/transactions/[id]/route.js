import { connectDB } from '@/lib/db';
import { Transaction } from '@/models/Transaction';
import { NextResponse } from 'next/server';

export async function GET(_, { params }) {
    await connectDB();
    const { id } = params;
  
    try {
      const txn = await Transaction.findById(id);
      if (!txn) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      return NextResponse.json(txn);
    } catch (err) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }
}