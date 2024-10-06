import Joi from 'joi';
import { contactTypeList, phoneNumberRegex } from '../constants/contacts.js';

export const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().pattern(phoneNumberRegex).required(),
  email: Joi.string().email().min(3).max(20).required(),
  isFavourite: Joi.boolean().required(),
  contactType: Joi.string()
    .valid(...contactTypeList)
    .required(),
});

export const contactPatchSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().pattern(phoneNumberRegex),
  email: Joi.string().email().min(3).max(20),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid(...contactTypeList),
});