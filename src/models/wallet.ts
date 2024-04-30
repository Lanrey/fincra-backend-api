import mongoose, { Document, Schema } from 'mongoose';
import { Mutex } from 'async-mutex';

interface IWallet extends Document {
    userId: string;
    balance: number;
}

const walletSchema: Schema = new Schema({
    userId: { type: String, required: true, unique: true },
    balance: { type: Number, required: true, default: 0 }
});

export const WalletModel = mongoose.model<IWallet>('Wallet', walletSchema);