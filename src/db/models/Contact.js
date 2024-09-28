import { Schema, model } from 'mongoose';
import { contactTypeList, phoneNumberRegex } from '../../constants/contacts.js';
import { hadleSaveError, setUpdateOptions } from './hooks.js';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true,'The name field is required' ],
      minlength: 3,
      maxlength: 20,
    },
    phoneNumber: {
      type: String,
      match: phoneNumberRegex,
      required: [true,'The phone number field is required'],
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: false,
      minlength: 3,
      maxlength: 20,
    },
    isFavourite: {
      type: Boolean,
      default: false,
      required: true,
    },
    contactType: {
      type: String,
      enum: contactTypeList,
      required: true,
      default: 'personal',
      minlength: 3,
      maxlength: 20,
    },
  },
  { versionKey: false, timestamps: true },
);
contactSchema.post("save", hadleSaveError);
contactSchema.pre("findOneAndUpdate", setUpdateOptions);
contactSchema.post("findOneAndUpdate", hadleSaveError);

const ContactCollection = model('contact', contactSchema);
export const sortFields = [
  'name',
  'phoneNumber',
  'email',
  'isFavourite',
  'contactType',
  'createdAt',
  'updatedAt',
];
export default ContactCollection;

