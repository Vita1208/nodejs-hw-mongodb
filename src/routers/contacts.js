import { Router } from 'express';
import * as contactControllers from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';
import { contactAddSchema, contactPatchSchema } from '../validation/contacts.js';
import isValidId from "../middlewares/isValidId.js";



const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(contactControllers.getAllContactsController));

contactsRouter.get('/:id', isValidId, ctrlWrapper(contactControllers.getContactByIdController));

contactsRouter.post('/', validateBody(contactAddSchema), ctrlWrapper(contactControllers.addContactController));

contactsRouter.patch('/:id', isValidId, validateBody(contactPatchSchema), ctrlWrapper(contactControllers.patchContactController));

contactsRouter.delete('/:id', isValidId, ctrlWrapper(contactControllers.deleteContactController));

export default contactsRouter;