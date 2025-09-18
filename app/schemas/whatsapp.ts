import z from "zod";

export const whatsappSchema = z.object({
    phone: z.string().min(10).max(15),
    message: z.string().min(1).max(1024)
});

export type WhatsappSchema = z.infer<typeof whatsappSchema>;