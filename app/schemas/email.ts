import z from "zod";

export const emailSchema = z.object({
    to: z.email(),
    subject: z.string().min(1).max(255),
    message: z.string().min(1).max(5000)
});

export type EmailSchema = z.infer<typeof emailSchema>;