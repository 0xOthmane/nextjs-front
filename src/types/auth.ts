import { z } from "zod";
import { registerSchema } from "../lib/validators/register-validator";

export type TRegisterSchema = z.infer<typeof registerSchema>;