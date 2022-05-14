import { Schema, model, Types, Document } from 'mongoose';

export interface FileType {
  url: string;
  tags: string[];
  public_id: string;
}

export interface AssetDocument extends Document {
  images: Types.Array<FileType>;
  videos: Types.Array<FileType>;
  raws: Types.Array<FileType>;
}

const SingleFile = {
  url: String,
  tags: [String],
  public_id: String,
};
const assetSchema = new Schema({
  _id: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  images: [SingleFile],
  videos: [SingleFile],
  raws: [SingleFile],
});

const Asset = model<AssetDocument>('Asset', assetSchema);

export default Asset;