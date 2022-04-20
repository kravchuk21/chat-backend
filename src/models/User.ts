import mongoose, {Document, Schema} from 'mongoose';
import isEmail from 'validator/lib/isEmail';

export interface IUser extends Document {
    email: string;
    fullName: string;
    username: string;
    password: string;
    confirmed: boolean;
    avatar: string;
    confirm_hash: string;
    last_seen: Date;
}

const UserSchema: Schema = new Schema(
    {
        email: {
            type: String,
            require: 'Email address is required',
            validate: [isEmail, 'Invalid email'],
            unique: true,
        },
        fullName: {
            type: String,
            required: 'FullName is required',
        },
        username: {
            type: String,
            require: 'Username is required',
            unique: true,
        },
        password: {
            type: String,
            required: 'Password is required',
        },
        confirmed: {
            type: Boolean,
            default: false,
        },
        avatar: String,
        confirm_hash: String,
        last_seen: {
            type: Date,
            default: new Date(),
        },
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel;