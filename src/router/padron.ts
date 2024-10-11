import { Router } from "express";
import { deleteForm, getForm, getForms, postForm, putForm } from "../controllers/padron";



const router = Router();

router.get( '/', getForms );
router.get( '/:id', getForm );
router.delete( '/:id', deleteForm );
router.post( '/', postForm );
router.put( '/:id', putForm );

export default router;