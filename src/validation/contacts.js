import Joi from "joi";

import { contactTypeList, phoneNumberRegex} from "../constants/contacts.js";


export const contactAddSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    phoneNumber: Joi.string().min(3).pattern(phoneNumberRegex).max(20).required(),
    email: Joi.string().min(3).max(20).required(),
    isFavourite: Joi.boolean().required(),
    contactType: Joi.string().valid(...contactTypeList).min(3).max(20).required(),
});

export const contactPatchSchema = Joi.object({
    name: Joi.string().min(3).max(20),
    phoneNumber: Joi.string().min(3).pattern(phoneNumberRegex).max(20),
    email: Joi.string().min(3).max(20),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().valid(...contactTypeList).min(3).max(20),
});