import { connectDB } from '@/lib/db';
import { Transaction } from '@/models/Transaction';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { amount, description, date, category } = body;

    await connectDB();
    const newTransaction = await Transaction.create({ amount, description, date, category });

    if (!newTransaction) {
      return NextResponse.json(
        { error: 'Failed to create transaction.' },
        { status: 500 }
      );
    }

    return NextResponse.json(newTransaction, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong while creating the transaction.' },
      { status: 500 }
    );
  }
}


export async function GET() {
    try {
        await connectDB();
        const transactions = await Transaction.find().sort({ date: -1 });
    
        if (!transactions || transactions.length === 0) {
            return NextResponse.json(
            { message: 'No transactions found.' },
            { status: 404 }
            );
        }
    
        return NextResponse.json(transactions, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch transactions' },
            { status: 500 }
        );
    }
}