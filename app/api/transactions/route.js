import { connectDB } from '@/lib/db';
import { Transaction } from '@/models/Transaction';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.amount || !body.description || !body.date) {
      return NextResponse.json(
        { error: 'Amount, description, and date are required.' },
        { status: 400 }
      );
    }

    await connectDB();
    const newTransaction = await Transaction.create(body);

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


export async function PUT(req, { params }) {
    await connectDB();
    const { id } = params;
    const body = await req.json();

    if(!body) return NextResponse.json({ error: 'Changes are required.' },{ status: 400 });
  
    try {
      const updatedTxn = await Transaction.findByIdAndUpdate(id, body, { new: true });
      if (!updatedTxn) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      return NextResponse.json(updatedTxn);
    } catch (err) {
      return NextResponse.json({ error: 'Update failed' }, { status: 400 });
    }
}
  
 
export async function DELETE(_, { params }) {
    await connectDB();
    const { id } = params;
  
    try {
      const deletedTxn = await Transaction.findByIdAndDelete(id);
      if (!deletedTxn) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      return NextResponse.json({ message: 'Deleted successfully' });
    } catch (err) {
      return NextResponse.json({ error: 'Delete failed' }, { status: 400 });
    }
}

/*
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
*/


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